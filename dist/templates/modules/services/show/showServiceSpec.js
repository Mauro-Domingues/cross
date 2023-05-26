import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class ShowSpecService {
    messages;
    console;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
    }
    execute() {
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
        return `import { AppError } from '@shared/errors/AppError';
import { Fake${this.names.pluralUpperModuleName}Repository } from '@modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { QueryRunner } from 'typeorm';
import { Show${this.names.upperModuleName}Service } from './Show${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${this.names.pluralUpperModuleName}Repository;
let show${this.names.upperModuleName}: Show${this.names.upperModuleName}Service;

describe('Show${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();

    show${this.names.upperModuleName} = new Show${this.names.upperModuleName}Service(fake${this.names.pluralUpperModuleName}Repository);
  });

  it('should be able to show a ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${this.names.pluralUpperModuleName}Repository.create({} as QueryRunner, {
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const get${this.names.upperModuleName} = await show${this.names.upperModuleName}.execute({
      id: ${this.names.lowerModuleName}.id,
    });

    expect(get${this.names.upperModuleName}.data).toHaveProperty('id');
    expect(get${this.names.upperModuleName}.data).toEqual(${this.names.lowerModuleName});
  });

  it('should not be able to show ${this.names.pluralLowerModuleName} with a non-existing id', async () => {
    await expect(
      show${this.names.upperModuleName}.execute({
        id: 'non-existing-${this.names.lowerModuleName}-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
    }
}
