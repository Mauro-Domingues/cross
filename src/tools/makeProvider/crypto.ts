import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateFakeCrypto } from '@templates/providers/fakes/fakeCrypto';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateCryptoProvider extends BaseProvider {
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;
  private readonly createFakeCrypto: CreateFakeCrypto;
  private readonly createICryptoDTO: CreateICryptoDTO;
  private readonly createICrypto: CreateICrypto;
  private readonly createCrypto: CreateCrypto;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
    this.createFakeCrypto = new CreateFakeCrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createICrypto = new CreateICrypto();
    this.createCrypto = new CreateCrypto();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'CryptoProvider', 'fakes'],
      [this.basePath, 'CryptoProvider', 'dtos'],
      [this.basePath, 'CryptoProvider', 'implementations'],
      [this.basePath, 'CryptoProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'crypto.ts'], this.createCryptoConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'],
        this.createICryptoDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'CryptoProvider', 'fakes', 'FakeCryptoProvider.ts'],
      this.createFakeCrypto,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ],
        this.createCrypto,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'CryptoProvider', 'models', 'ICryptoProvider.ts'],
      this.createICrypto,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './CryptoProvider';\n",
    );

    return [
      [this.basePath, 'CryptoProvider', 'index.ts'],
      this.createCryptoIndex,
    ];
  }
}