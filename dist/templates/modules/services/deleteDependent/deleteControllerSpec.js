"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteSpecDependentController = void 0;
var _messages = require("../../../../../dist/tools/messages");
class DeleteSpecDependentController {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import request from 'supertest';
import { DataSource } from 'typeorm';
import { createConnection } from '@shared/typeorm';
import { app } from '@shared/app';

let connection: DataSource;

describe('Delete${this.names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    return connection.query(
      \`INSERT INTO ${this.names.dbModuleName}(id, name, description) values('12345', '${this.names.lowerModuleName}', 'This is a ${this.names.lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to delete a ${this.names.lowerModuleName}', async () => {
    const response = await request(app).delete('/${this.fatherNames.routeModuleName}/track/${this.names.routeModuleName}/12345');

    expect(response.status).toBe(200);
  });
});
`;
  }
}
exports.DeleteSpecDependentController = DeleteSpecDependentController;