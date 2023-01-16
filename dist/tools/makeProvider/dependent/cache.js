"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentCacheProvider;
var _fs = _interopRequireDefault(require("fs"));
var _container = _interopRequireDefault(require("../../../../dist/templates/index/container"));
var _cacheIndex = _interopRequireDefault(require("../../../../dist/templates/providers/cacheIndex"));
var _cacheConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/cacheConfig"));
var _fakeCache = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeCache"));
var _RedisCache = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/RedisCache"));
var _ICache = _interopRequireDefault(require("../../../../dist/templates/providers/models/ICache"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentCacheProvider(fatherData) {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/modules')) {
    _fs.default.mkdirSync('src/modules');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/index.ts')) {
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, '', error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models`);
  }
  _fs.default.appendFile(`src/shared/container/index.ts`, `import '@modules/${fatherData.pluralLowerModuleName}/providers';`, error => {
    if (error) throw error;
  });
  _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, `\nimport './CacheProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/cache.ts')) {
    _fs.default.appendFile('src/config/cache.ts', (0, _cacheConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/cache.ts', (0, _cacheConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`, (0, _fakeCache.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`, (0, _fakeCache.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`, (0, _RedisCache.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`, (0, _RedisCache.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`, (0, _ICache.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`, (0, _ICache.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`, (0, _cacheIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/CacheProvider/index.ts`, (0, _cacheIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- CacheProvider ${_messages.default.created}`, '\x1b[0m');
}