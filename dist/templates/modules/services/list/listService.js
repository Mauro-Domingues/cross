"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listService;
function listService(names) {
  return `import { injectable, inject } from 'tsyringe';

import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import ${names.upperModuleName} from '@modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}';
import ICacheDTO from '@dtos/ICacheDTO';
import IListDTO from '@dtos/IListDTO';

@injectable()
export default class List${names.upperModuleName}Service {
  constructor(
    @inject('${names.pluralUpperModuleName}Repository')
    private ${names.pluralLowerModuleName}Repository: I${names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(page: number, limit: number): Promise<IListDTO<${names.upperModuleName}>> {
    const cacheKey = \`${names.pluralLowerModuleName}:\${names.page}:\${names.limit}\`;

    let cache = await this.cacheProvider.recovery<ICacheDTO<${names.upperModuleName}>>(cacheKey);

    if (!cache) {
      const ${names.pluralLowerModuleName} = await this.${names.pluralLowerModuleName}Repository.findAll(page, limit);
      cache = { data: ${names.pluralLowerModuleName}.${names.pluralLowerModuleName}, total: ${names.pluralLowerModuleName}.amount };
      await this.cacheProvider.save(cacheKey, cache);
    }

    return {
      code: 200,
      message_code: 'OK',
      message: '${names.pluralUpperModuleName} found successfully',
      pagination: {
        total: cache.total,
        page,
        perPage: limit,
        lastPage: cache.total % limit,
      },
      data: cache.data,
    };
  }
}
`;
}