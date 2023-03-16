"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentNotificationProvider = void 0;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _notificationConfig = require("../../../../dist/templates/providers/config/notificationConfig");
var _INotificationDTO = require("../../../../dist/templates/providers/dtos/INotificationDTO");
var _fakeNotification = require("../../../../dist/templates/providers/fakes/fakeNotification");
var _OneSignalNotification = require("../../../../dist/templates/providers/implementations/OneSignalNotification");
var _INotification = require("../../../../dist/templates/providers/models/INotification");
var _notificationIndex = require("../../../../dist/templates/providers/notificationIndex");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentNotificationProvider {
  constructor(fatherNames) {
    this.fatherNames = void 0;
    this.messages = void 0;
    this.createINotification = void 0;
    this.createINotificationDTO = void 0;
    this.createOneSignalNotification = void 0;
    this.createFakeNotification = void 0;
    this.createNotificationConfig = void 0;
    this.createNotificationIndex = void 0;
    this.createContainer = void 0;
    this.fatherNames = fatherNames;
    this.messages = _messages.default;
    this.createINotification = new _INotification.CreateINotification();
    this.createINotificationDTO = new _INotificationDTO.CreateINotificationDTO();
    this.createOneSignalNotification = new _OneSignalNotification.CreateOneSignalNotification();
    this.createFakeNotification = new _fakeNotification.CreateFakeNotification();
    this.createNotificationConfig = new _notificationConfig.CreateNotificationConfig();
    this.createNotificationIndex = new _notificationIndex.CreateNotificationIndex();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/modules')) {
      (0, _fs.mkdirSync)('src/modules');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/index.ts', this.createContainer.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, '', error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models`);
    }
    (0, _fs.appendFile)(`src/shared/container/index.ts`, `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`, error => {
      if (error) throw error;
    });
    (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, `\nimport './NotificationProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/config/notification.ts')) {
      (0, _fs.appendFile)('src/config/notification.ts', this.createNotificationConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/notification.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/config/notification.ts', this.createNotificationConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, this.createINotificationDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/dtos/ISendNotificationDTO.ts`, this.createINotificationDTO.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, this.createFakeNotification.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/fakes/FakeNotificationProvider.ts`, this.createFakeNotification.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, this.createOneSignalNotification.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/implementations/OneSignalProvider.ts`, this.createOneSignalNotification.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, this.createINotification.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/models/INotificationProvider.ts`, this.createINotification.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, this.createNotificationIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/NotificationProvider/index.ts`, this.createNotificationIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- NotificationProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeDependentNotificationProvider = MakeDependentNotificationProvider;