"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeMailProvider = void 0;
var _fs = require("fs");
var _mailConfig = require("../../../../dist/templates/providers/config/mailConfig");
var _IMailDTO = require("../../../../dist/templates/providers/dtos/IMailDTO");
var _IParseMailTemplateDTO = require("../../../../dist/templates/providers/dtos/IParseMailTemplateDTO");
var _fakeMail = require("../../../../dist/templates/providers/fakes/fakeMail");
var _fakeMailTemplate = require("../../../../dist/templates/providers/fakes/fakeMailTemplate");
var _EtherealMail = require("../../../../dist/templates/providers/implementations/EtherealMail");
var _MailTemplate = require("../../../../dist/templates/providers/implementations/MailTemplate");
var _SESMail = require("../../../../dist/templates/providers/implementations/SESMail");
var _mailIndex = require("../../../../dist/templates/providers/mailIndex");
var _mailTemplateIndex = require("../../../../dist/templates/providers/mailTemplateIndex");
var _IMail = require("../../../../dist/templates/providers/models/IMail");
var _IMailTemplate = require("../../../../dist/templates/providers/models/IMailTemplate");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeMailProvider {
  constructor() {
    this.messages = void 0;
    this.createIMail = void 0;
    this.createFakeMail = void 0;
    this.createIMailDTO = void 0;
    this.createMailConfig = void 0;
    this.createMailIndex = void 0;
    this.createMailTemplate = void 0;
    this.createSESMail = void 0;
    this.createEtherealMail = void 0;
    this.createIMailTemplate = void 0;
    this.createFakeMailTemplate = void 0;
    this.createIMailTemplateDTO = void 0;
    this.createMailTemplateIndex = void 0;
    this.messages = _messages.default;
    this.createIMail = new _IMail.CreateIMail();
    this.createFakeMail = new _fakeMail.CreateFakeMail();
    this.createIMailDTO = new _IMailDTO.CreateIMailDTO();
    this.createMailConfig = new _mailConfig.CreateMailConfig();
    this.createMailIndex = new _mailIndex.CreateMailIndex();
    this.createIMailTemplate = new _IMailTemplate.CreateIMailTemplate();
    this.createFakeMailTemplate = new _fakeMailTemplate.CreateFakeMailTemplate();
    this.createIMailTemplateDTO = new _IParseMailTemplateDTO.CreateIMailTemplateDTO();
    this.createMailTemplateIndex = new _mailTemplateIndex.CreateMailTemplateIndex();
    this.createMailTemplate = new _MailTemplate.CreateMailTemplate();
    this.createSESMail = new _SESMail.CreateSESMail();
    this.createEtherealMail = new _EtherealMail.CreateEtherealMail();
  }
  async execute() {
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers')) {
      (0, _fs.mkdirSync)('src/shared/container/providers');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/dtos')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/dtos');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/fakes')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/fakes');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/implementations')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/implementations');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/models')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/models');
    }
    (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './MailTemplateProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/config/mail.ts')) {
      (0, _fs.appendFile)('src/config/mail.ts', this.createMailConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/mail.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/config/mail.ts', this.createMailConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', this.createIMailTemplateDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', this.createIMailTemplateDTO.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', this.createFakeMailTemplate.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', this.createFakeMailTemplate.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', this.createMailTemplate.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', this.createMailTemplate.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', this.createIMailTemplate.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', this.createIMailTemplate.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/index.ts', this.createMailTemplateIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/index.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/index.ts', this.createMailTemplateIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/dtos')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/dtos');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/fakes')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/fakes');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/implementations')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/implementations');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/models')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/models');
    }
    (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './MailProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', this.createIMailDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', this.createIMailDTO.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', this.createFakeMail.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', this.createFakeMail.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', this.createEtherealMail.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', this.createEtherealMail.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', this.createSESMail.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', this.createSESMail.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/models/IMailProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/models/IMailProvider.ts', this.createIMail.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailProvider/models/IMailProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/models/IMailProvider.ts', this.createIMail.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/index.ts', this.createMailIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/MailProvider/index.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/MailProvider/index.ts', this.createMailIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- MailProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeMailProvider = MakeMailProvider;