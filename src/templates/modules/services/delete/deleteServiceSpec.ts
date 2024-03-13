import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class DeleteSpecService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
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
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { AppError } ${'from'} '@shared/errors/AppError';

import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { Connection, IConnectionDTO } ${'from'} '@shared/typeorm';
import { FakeDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Delete${this.names.upperModuleName}Service } ${'from'} './Delete${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${
      this.names.pluralUpperModuleName
    }Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${this.names.upperModuleName}Service: Delete${
      this.names.upperModuleName
    }Service;
let connection: IConnectionDTO;

describe('Delete${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection('database_test', FakeDataSource);
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    delete${this.names.upperModuleName}Service = new Delete${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
      connection,
    );
  });

  it('should be able to delete a ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    await delete${this.names.upperModuleName}Service.execute(${
      this.names.lowerModuleName
    }.id);

    const deleted${this.names.upperModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.findBy({
      where: {
        id: ${this.names.lowerModuleName}.id,
      },
    });

    expect(deleted${this.names.upperModuleName}).toBe(null);
  });

  it('should not be able to delete a ${
    this.names.lowerModuleName
  } with a non-existing id', async (): Promise<void> => {
    await expect(
      delete${this.names.upperModuleName}Service.execute('non-existing-${
      this.names.lowerModuleName
    }-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
