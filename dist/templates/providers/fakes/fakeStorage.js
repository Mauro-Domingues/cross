"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeStorage = void 0;
class CreateFakeStorage {
  execute() {
    return `import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.splice(findIndex, 1);
  }
}

export default FakeStorageProvider;
`;
  }
}
exports.CreateFakeStorage = CreateFakeStorage;