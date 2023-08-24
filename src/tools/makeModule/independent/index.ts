import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { MakeInfra } from './infra';
import { MakeFunctionalities } from './functionalities';
import { MakeStructure } from './structure';
import { MakeUnitTests } from './unitTests';

export class MakeModule {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly makeUnitTests: MakeUnitTests;
  private readonly makeStructure: MakeStructure;
  private readonly makeInfra: MakeInfra;
  private readonly makeFunctionalities: MakeFunctionalities;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.makeFunctionalities = new MakeFunctionalities(this.names);
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

    await this.makeStructure.execute();
    await this.makeInfra.execute();
    await this.makeFunctionalities.execute();
    await this.makeUnitTests.execute();
    return this.console.one([
      `- ${this.names.lowerModuleName}Module ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
