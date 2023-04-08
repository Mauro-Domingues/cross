"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeHash = void 0;
class CreateFakeHash {
  execute() {
    return `import { IHashProviderDTO } from '../models/IHashProvider';

export class FakeHashProvider implements IHashProviderDTO {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}
`;
  }
}
exports.CreateFakeHash = CreateFakeHash;