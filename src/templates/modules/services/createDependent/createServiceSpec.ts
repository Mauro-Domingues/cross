import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateSpecDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNamesDTO,
          'lowerModuleName' | 'upperModuleName' | 'pluralUpperModuleName'
        >
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { Connection, IConnectionDTO } ${'from'} '@shared/typeorm';
import { AppError } ${'from'} '@shared/errors/AppError';
import { FakeDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Create${this.names.upperModuleName}Service } ${'from'} './Create${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${
      this.names.pluralUpperModuleName
    }Repository;
let fakeCacheProvider: FakeCacheProvider;
let create${this.names.upperModuleName}Service: Create${
      this.names.upperModuleName
    }Service;
let connection: IConnectionDTO;

describe('Create${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection('database_test', FakeDataSource);
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    create${this.names.upperModuleName}Service = new Create${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
      connection,
    );
  });

  it('should be able to create a new ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await create${
      this.names.upperModuleName
    }Service.execute({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(${this.names.lowerModuleName}.data).toHaveProperty('id');
  });

  it('should return AppError', async (): Promise<void> => {
    jest.spyOn(fake${
      this.names.pluralUpperModuleName
    }Repository, 'create').mockImplementationOnce(() => {
      throw new AppError('FAILED_TO_CREATE', 'Failed to create a ${
        this.names.lowerModuleName
      }');
    });

    await expect(create${
      this.names.upperModuleName
    }Service.execute({})).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
`;
  }
}
