import { createContainer } from '@templates/index/container';
import { createRoutes } from '@templates/index/routes';
import { createModuleDTO } from '@templates/modules/dtos/moduleDTO';
import { createEntity } from '@templates/modules/entities/entity';
import { createDependentInjection } from '@templates/modules/inject/dependentInjection';
import { createDependentRepository } from '@templates/modules/repositories/dependentRepository';
import { createDependentFakeRepository } from '@templates/modules/repositories/fakes/fakeDependentRepository';
import { createIDependentRepository } from '@templates/modules/repositories/IDependentRepository';
import { createDependentRoute } from '@templates/modules/routes/dependentRoutes';
import { createFullDependentRoute } from '@templates/modules/routes/fullDependentRoutes';
import { createIndexDependentRoute } from '@templates/modules/routes/indexDependentRouter';
import { appendFile, existsSync, truncate } from 'fs';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentInfra(
  names: IModuleNamesDTO,
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (!existsSync('src/shared/container/index.ts')) {
    appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }

  if (!existsSync('src/routes/index.ts')) {
    appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  }

  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      createModuleDTO(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      createModuleDTO(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      createEntity(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      createEntity(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      createDependentRepository(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      createDependentRepository(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      createIDependentRepository(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      createIDependentRepository(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      createDependentFakeRepository(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      createDependentFakeRepository(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }

  if (!existsSync(`src/routes/${fatherNames.lowerModuleName}Router.ts`)) {
    appendFile(
      `src/routes/${fatherNames.lowerModuleName}Router.ts`,
      createFullDependentRoute(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
    appendFile(
      `src/routes/index.ts`,
      createIndexDependentRoute(fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    appendFile(
      `src/routes/${fatherNames.lowerModuleName}Router.ts`,
      createDependentRoute(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  appendFile(
    'src/shared/container/index.ts',
    createDependentInjection(names, fatherNames),
    error => {
      if (error) throw error;
    },
  );
}
