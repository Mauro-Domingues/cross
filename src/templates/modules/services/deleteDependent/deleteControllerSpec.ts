import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class DeleteSpecDependentController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'pluralUpperModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import request ${'from'} 'supertest';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { Connection } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';

describe('Delete${this.names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    Connection.mysql = await MysqlDataSource('database_test').initialize();
    await Connection.mysql.runMigrations();

    return Connection.mysql.query(
      \`INSERT INTO ${
        this.names.dbModuleName
      }(id, name, description) values('12345', '${
      this.names.lowerModuleName
    }', 'This is a ${this.names.lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await Connection.mysql.dropDatabase();
    return Connection.mysql.destroy();
  });

  it('Should be able to delete a ${this.names.lowerModuleName}', async () => {
    const response = await request(app.server).delete('/${
      this.names.routeModuleName
    }/12345');

    expect(response.status).toBe(200);
  });
});
`;
  }
}
