import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createContainer } from '@templates/index/container';
import { createIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { createFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { createMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { createMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { createIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentMailTemplateProvider(
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (!existsSync('src')) {
    mkdirSync('src');
  }
  if (!existsSync('src/config')) {
    mkdirSync('src/config');
  }
  if (!existsSync('src/modules')) {
    mkdirSync('src/modules');
  }
  if (!existsSync('src/shared')) {
    mkdirSync('src/shared');
  }
  if (!existsSync('src/shared/container')) {
    mkdirSync('src/shared/container');
  }
  if (!existsSync('src/shared/container/index.ts')) {
    appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (
    !existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`)
  ) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`);
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
    );
  }
  appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  appendFile(
    `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    `\nimport './MailTemplateProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- MailTemplateProvider ${messages.created}`,
    '\x1b[0m',
  );
}
