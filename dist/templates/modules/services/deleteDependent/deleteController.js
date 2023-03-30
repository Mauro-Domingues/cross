"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDependentController = void 0;
const messages_1 = require("../../../../tools/messages");
class DeleteDependentController {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Delete${this.names.upperModuleName}Service from './Delete${this.names.upperModuleName}Service';

export default class Delete${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${this.names.upperModuleName} = container.resolve(Delete${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: IObjectDTO = request.params;

    const ${this.names.lowerModuleName} = await delete${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
    }
}
exports.DeleteDependentController = DeleteDependentController;
