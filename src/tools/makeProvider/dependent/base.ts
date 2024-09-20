import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateContainerIndex } from '@templates/index/container';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class DependentBaseProvider {
  private readonly createContainerIndex: CreateContainerIndex;
  protected readonly fileManager: FileManager;
  protected readonly messages: IMessageDTO;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.createContainerIndex = new CreateContainerIndex();
    this.messages = Messages.getInstance().execute();
    this.fileManager = FileManager.getInstance();
  }

  protected constructBase(): void {
    if (!this.fatherNames) {
      throw new CustomError({
        message: this.messages.providers.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', 'shared', 'container'],
      ['src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'],
    ]);
    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainerIndex.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        '',
      );
    }
    return this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
  }
}
