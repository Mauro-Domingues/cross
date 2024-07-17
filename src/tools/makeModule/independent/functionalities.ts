import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeFunctionalities {
  private readonly createController: CreateController;
  private readonly deleteController: DeleteController;
  private readonly updateController: UpdateController;
  private readonly showController: ShowController;
  private readonly listController: ListController;
  private readonly updateService: UpdateService;
  private readonly deleteService: DeleteService;
  private readonly createService: CreateService;
  private readonly listService: ListService;
  private readonly showService: ShowService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;

  public constructor(private readonly names: IModuleNameDTO | undefined) {
    this.updateController = new UpdateController(this.names);
    this.createController = new CreateController(this.names);
    this.deleteController = new DeleteController(this.names);
    this.showController = new ShowController(this.names);
    this.listController = new ListController(this.names);
    this.updateService = new UpdateService(this.names);
    this.deleteService = new DeleteService(this.names);
    this.createService = new CreateService(this.names);
    this.showService = new ShowService(this.names);
    this.listService = new ListService(this.names);
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'create'.concat(this.names.upperModuleName),
          'Create'.concat(this.names.upperModuleName, 'Controller.ts'),
        ],
        this.createController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'create'.concat(this.names.upperModuleName),
          'Create'.concat(this.names.upperModuleName, 'Service.ts'),
        ],
        this.createService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'delete'.concat(this.names.upperModuleName),
          'Delete'.concat(this.names.upperModuleName, 'Controller.ts'),
        ],
        this.deleteController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'delete'.concat(this.names.upperModuleName),
          'Delete'.concat(this.names.upperModuleName, 'Service.ts'),
        ],
        this.deleteService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'list'.concat(this.names.upperModuleName),
          'List'.concat(this.names.upperModuleName, 'Controller.ts'),
        ],
        this.listController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'list'.concat(this.names.upperModuleName),
          'List'.concat(this.names.upperModuleName, 'Service.ts'),
        ],
        this.listService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'show'.concat(this.names.upperModuleName),
          'Show'.concat(this.names.upperModuleName, 'Controller.ts'),
        ],
        this.showController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'show'.concat(this.names.upperModuleName),
          'Show'.concat(this.names.upperModuleName, 'Service.ts'),
        ],
        this.showService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'update'.concat(this.names.upperModuleName),
          'Update'.concat(this.names.upperModuleName, 'Controller.ts'),
        ],
        this.updateController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          'update'.concat(this.names.upperModuleName),
          'Update'.concat(this.names.upperModuleName, 'Service.ts'),
        ],
        this.updateService,
      ],
    ]);
  }
}
