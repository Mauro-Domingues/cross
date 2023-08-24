import { CreateController } from '@templates/modules/services/create/createController';
import { CreateService } from '@templates/modules/services/create/createService';
import { DeleteController } from '@templates/modules/services/delete/deleteController';
import { DeleteService } from '@templates/modules/services/delete/deleteService';
import { ListController } from '@templates/modules/services/list/listController';
import { ListService } from '@templates/modules/services/list/listService';
import { ShowController } from '@templates/modules/services/show/showController';
import { ShowService } from '@templates/modules/services/show/showService';
import { UpdateController } from '@templates/modules/services/update/updateController';
import { UpdateService } from '@templates/modules/services/update/updateService';
import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeFunctionalities {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly updateService: UpdateService;
  private readonly updateController: UpdateController;
  private readonly showService: ShowService;
  private readonly showController: ShowController;
  private readonly listService: ListService;
  private readonly listController: ListController;
  private readonly deleteService: DeleteService;
  private readonly deleteController: DeleteController;
  private readonly createService: CreateService;
  private readonly createController: CreateController;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.names = names;
    this.updateService = new UpdateService(this.names);
    this.updateController = new UpdateController(this.names);
    this.showService = new ShowService(this.names);
    this.showController = new ShowController(this.names);
    this.listService = new ListService(this.names);
    this.listController = new ListController(this.names);
    this.deleteService = new DeleteService(this.names);
    this.deleteController = new DeleteController(this.names);
    this.createService = new CreateService(this.names);
    this.createController = new CreateController(this.names);
  }

  public async execute(): Promise<void> {
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

    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.ts`,
      ],
      this.createController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.ts`,
      ],
      this.createService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.ts`,
      ],
      this.deleteController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.ts`,
      ],
      this.deleteService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.ts`,
      ],
      this.listController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.ts`,
      ],
      this.listService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.ts`,
      ],
      this.showController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.ts`,
      ],
      this.showService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.ts`,
      ],
      this.updateController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.ts`,
      ],
      this.updateService,
    );
  }
}
