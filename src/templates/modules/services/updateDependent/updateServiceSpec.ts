import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class UpdateSpecDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names:
    | Pick<
        IModuleNamesDTO,
        'lowerModuleName' | 'upperModuleName' | 'pluralUpperModuleName'
      >
    | undefined;
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { AppError } ${'from'} '@shared/errors/AppError';

import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { DataSource } ${'from'} 'typeorm';
import { createConnection } ${'from'} '@shared/typeorm';
import { Update${this.names.upperModuleName}Service } ${'from'} './Update${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${
      this.names.pluralUpperModuleName
    }Repository;
let fakeCacheProvider: FakeCacheProvider;
let update${this.names.upperModuleName}Service: Update${
      this.names.upperModuleName
    }Service;
let connection: DataSource;

describe('Update${this.names.upperModuleName}Service', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    return connection.destroy();
  });

  beforeEach(() => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    update${this.names.upperModuleName}Service = new Update${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('Should be able to update a ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const updated${this.names.upperModuleName} = await update${
      this.names.upperModuleName
    }Service.execute(
      { name: 'updated${
        this.names.upperModuleName
      }', description: 'This is a updated${this.names.lowerModuleName}' },
      ${this.names.lowerModuleName}.id,
    );

    expect(updated${this.names.upperModuleName}.data.name).toEqual('updated${
      this.names.upperModuleName
    }');
  });

  it('should return AppError', async () => {
    await expect(
      update${
        this.names.upperModuleName
      }Service.execute({ name: '', description: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
