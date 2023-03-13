import { IModuleNamesDTO } from '@tools/names';

export class CreateController {
  private names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
  >;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import I${this.names.upperModuleName}DTO from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Create${this.names.upperModuleName}Service from './Create${this.names.upperModuleName}Service';

export default class Create${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO = request.body;

    const create${this.names.upperModuleName} = container.resolve(Create${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Data);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
