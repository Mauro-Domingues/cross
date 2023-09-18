import { CreateExpressNamespace } from '@templates/types/expressNamespace';
import { CreateApp } from '@templates/api/app';
import { CreateServer } from '@templates/api/server';
import { CreateDomains } from '@templates/assets/domains';
import { CreateICacheDTO } from '@templates/dtos/ICacheDTO';
import { CreateIListDTO } from '@templates/dtos/IListDTO';
import { CreateIObjectDTO } from '@templates/dtos/IObjectDTO';
import { CreateIResponseDTO } from '@templates/dtos/IResponseDTO';
import { CreateRoutes } from '@templates/index/routes';
import { CreateRateLimiter } from '@templates/middlewares/rateLimiter';
import { CreateDecimaAdjust } from '@templates/utils/decimalAdjust';
import { CreateDomainsManager } from '@templates/utils/domains';
import { CreateEnsureAuthenticated } from '@templates/middlewares/ensureAuthenticated';
import { CreateEnvNamespace } from '@templates/types/envNamespace';
import { CreateNormalizeQueryLink } from '@templates/utils/normalizeQueryLink';
import { CreateDecodeJwt } from '@templates/middlewares/decodeJwt';
import { CreateGuard } from '@templates/index/guard';
import { CreateErrorLog } from '@templates/utils/errorLog';
import { FileManager } from '@tools/fileManager';
import { CreateKeys } from '@templates/types/keys';
import { CreateIExceptionDTO } from '@templates/dtos/IExceptionDTO';
import { CreateparseParam } from '@templates/middlewares/parseParam';
import { CreateCombinations } from '@templates/utils/combinations';
import { CreateJsonToXml } from '@templates/utils/jsonToXml';
import { CreateConvertToMilliseconds } from '@templates/utils/convertToMilliseconds';

export class MakeThirdLayer {
  private readonly createConvertToMilliseconds: CreateConvertToMilliseconds;
  private readonly createEnsureAuthenticated: CreateEnsureAuthenticated;
  private readonly createNormalizeQueryLink: CreateNormalizeQueryLink;
  private readonly createExpressNamespace: CreateExpressNamespace;
  private readonly createDomainsManager: CreateDomainsManager;
  private readonly createIExceptionDTO: CreateIExceptionDTO;
  private readonly createEnvNamespace: CreateEnvNamespace;
  private readonly createDecimaAdjust: CreateDecimaAdjust;
  private readonly createIResponseDTO: CreateIResponseDTO;
  private readonly createCombinations: CreateCombinations;
  private readonly createRateLimiter: CreateRateLimiter;
  private readonly createParseParam: CreateparseParam;
  private readonly createIObjectDTO: CreateIObjectDTO;
  private readonly createDecodeJwt: CreateDecodeJwt;
  private readonly createJsonToXml: CreateJsonToXml;
  private readonly createICacheDTO: CreateICacheDTO;
  private readonly createErrorLog: CreateErrorLog;
  private readonly createIListDTO: CreateIListDTO;
  private readonly createDomains: CreateDomains;
  private readonly createRoutes: CreateRoutes;
  private readonly createServer: CreateServer;
  private readonly fileManager: FileManager;
  private readonly createGuard: CreateGuard;
  private readonly createKeys: CreateKeys;
  private readonly createApp: CreateApp;

  constructor() {
    this.createConvertToMilliseconds = new CreateConvertToMilliseconds();
    this.createEnsureAuthenticated = new CreateEnsureAuthenticated();
    this.createNormalizeQueryLink = new CreateNormalizeQueryLink();
    this.createExpressNamespace = new CreateExpressNamespace();
    this.createDomainsManager = new CreateDomainsManager();
    this.createIExceptionDTO = new CreateIExceptionDTO();
    this.createDecimaAdjust = new CreateDecimaAdjust();
    this.createIResponseDTO = new CreateIResponseDTO();
    this.createEnvNamespace = new CreateEnvNamespace();
    this.createCombinations = new CreateCombinations();
    this.createRateLimiter = new CreateRateLimiter();
    this.createParseParam = new CreateparseParam();
    this.createIObjectDTO = new CreateIObjectDTO();
    this.createDecodeJwt = new CreateDecodeJwt();
    this.createJsonToXml = new CreateJsonToXml();
    this.createICacheDTO = new CreateICacheDTO();
    this.createErrorLog = new CreateErrorLog();
    this.createIListDTO = new CreateIListDTO();
    this.createDomains = new CreateDomains();
    this.createRoutes = new CreateRoutes();
    this.createServer = new CreateServer();
    this.fileManager = new FileManager();
    this.createGuard = new CreateGuard();
    this.createKeys = new CreateKeys();
    this.createApp = new CreateApp();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateFile(
      ['src', '@types', 'express.d.ts'],
      this.createExpressNamespace,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', '@types', 'env.d.ts'],
      this.createEnvNamespace,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', '@types', 'keys.d.ts'],
      this.createKeys,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'assets', 'domains.txt'],
      this.createDomains,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IExceptionDTO.ts'],
      this.createIExceptionDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'ICacheDTO.ts'],
      this.createICacheDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IListDTO.ts'],
      this.createIListDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IObjectDTO.ts'],
      this.createIObjectDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IResponseDTO.ts'],
      this.createIResponseDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'rateLimiter.ts'],
      this.createRateLimiter,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'ensureAuthenticated.ts'],
      this.createEnsureAuthenticated,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'parseParam.ts'],
      this.createParseParam,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'decodeJwt.ts'],
      this.createDecodeJwt,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'routes', 'guardRouter.ts'],
      this.createGuard,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'routes', 'index.ts'],
      this.createRoutes,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'app.ts'],
      this.createApp,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'server.ts'],
      this.createServer,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'decimalAdjust.ts'],
      this.createDecimaAdjust,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'domainsManager.ts'],
      this.createDomainsManager,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'convertToMilliseconds.ts'],
      this.createConvertToMilliseconds,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'combinations.ts'],
      this.createCombinations,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'errorLog.ts'],
      this.createErrorLog,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'jsonToXml.ts'],
      this.createJsonToXml,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'normalizeQueryLink.ts'],
      this.createNormalizeQueryLink,
    );
  }
}
