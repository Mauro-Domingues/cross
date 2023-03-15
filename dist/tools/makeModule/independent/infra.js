"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeInfra = void 0;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _routes = require("../../../../dist/templates/index/routes");
var _moduleDTO = require("../../../../dist/templates/modules/dtos/moduleDTO");
var _entity = require("../../../../dist/templates/modules/entities/entity");
var _injection = require("../../../../dist/templates/modules/inject/injection");
var _fakeRepository = require("../../../../dist/templates/modules/repositories/fakes/fakeRepository");
var _IRepository = require("../../../../dist/templates/modules/repositories/IRepository");
var _repository = require("../../../../dist/templates/modules/repositories/repository");
var _independentRoutes = require("../../../../dist/templates/modules/routes/independentRoutes");
var _indexRouter = require("../../../../dist/templates/modules/routes/indexRouter");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeInfra {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.createIndexRoute = void 0;
    this.createIndependentRoute = void 0;
    this.createIRepository = void 0;
    this.createFakeRepository = void 0;
    this.createRepository = void 0;
    this.createInjection = void 0;
    this.createEntity = void 0;
    this.createModuleDTO = void 0;
    this.createRoutes = void 0;
    this.createContainer = void 0;
    this.names = names;
    this.messages = _messages.default;
    this.createIndexRoute = new _indexRouter.CreateIndexRoute(this.names);
    this.createIndependentRoute = new _independentRoutes.CreateIndependentRoute(this.names);
    this.createIRepository = new _IRepository.CreateIRepository(this.names);
    this.createFakeRepository = new _fakeRepository.CreateFakeRepository(this.names);
    this.createRepository = new _repository.CreateRepository(this.names);
    this.createInjection = new _injection.CreateInjection(this.names);
    this.createEntity = new _entity.CreateEntity(this.names);
    this.createModuleDTO = new _moduleDTO.CreateModuleDTO(this.names);
    this.createRoutes = new _routes.CreateRoutes();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/index.ts', this.createContainer.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/routes/index.ts')) {
      (0, _fs.appendFile)('src/routes/index.ts', this.createRoutes.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`, this.createModuleDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`, this.createModuleDTO.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`, this.createEntity.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`, this.createEntity.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`, this.createRepository.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`, this.createRepository.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`, this.createIRepository.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`, this.createIRepository.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`, this.createFakeRepository.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`, this.createFakeRepository.execute(), error => {
        if (error) throw error;
      });
    }
    (0, _fs.appendFile)('src/shared/container/index.ts', this.createInjection.execute(), error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)(`src/routes/${this.names.lowerModuleName}Router.ts`)) {
      (0, _fs.appendFile)(`src/routes/${this.names.lowerModuleName}Router.ts`, this.createIndependentRoute.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/routes/${this.names.lowerModuleName}Router.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/routes/${this.names.lowerModuleName}Router.ts`, this.createIndependentRoute.execute(), error => {
        if (error) throw error;
      });
    }
    (0, _fs.appendFile)(`src/routes/index.ts`, this.createIndexRoute.execute(), error => {
      if (error) throw error;
    });
  }
}
exports.MakeInfra = MakeInfra;