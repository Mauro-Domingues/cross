import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';

export class ListSpecController {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Omit<IModuleNameDTO, 'pluralUpperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import request ${'from'} 'supertest';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { IConnectionDTO } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';
import { v4 as uuid } ${'from'} 'uuid';

let connection: IConnectionDTO;

describe('List${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    connection = {
      client: 'database_test',
      mysql: await MysqlDataSource('database_test').initialize(),
    };
    await connection.mysql.runMigrations();

    return connection.mysql.query(
      'INSERT INTO ${
        this.names.dbModuleName
      } (id, name, description) VALUES (?, ?, ?);',
      [uuid(), '${this.names.lowerModuleName}', 'This is a ${
      this.names.lowerModuleName
    }'],
    );
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to list all ${
    this.names.pluralLowerModuleName
  }', async (): Promise<void> => {
    const response = await request(app.server).get('/${
      this.names.routeModuleName
    }');

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
`;
  }
}
