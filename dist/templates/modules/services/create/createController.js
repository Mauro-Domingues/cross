"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateController = void 0;
var _messages = _interopRequireDefault(require("../../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateController {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = _messages.default;
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
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
exports.CreateController = CreateController;