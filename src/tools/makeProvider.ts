import fs from 'fs';

import createCacheIndex from '../templates/providers/cacheIndex';
import createFakeRedis from '../templates/providers/fakes/fakeCache';
import createFakeStorage from '../templates/providers/fakes/fakeStorage';
import createDiskStorage from '../templates/providers/implementations/DiskStorage';
import createRedisCache from '../templates/providers/implementations/redisCache';
import createICache from '../templates/providers/models/ICache';
import createIStorage from '../templates/providers/models/IStorage';
import createStorageIndex from '../templates/providers/storageIndex';
import messages from './messages';

export default async function makeProvider(providerName: string) {
  switch (providerName) {
    case 'cache':
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './CacheProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
          createFakeRedis(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
          createICache(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/index.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/index.ts',
          createCacheIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/index.ts',
          createCacheIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(`CacheProvider ${messages.created}`);
      break;
    case 'storage':
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './StorageProvider';`,
        error => {
          if (error) throw error;
        },
      );
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
          createFakeStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/impementations/DiskStorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/impementations/DiskStorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/impementations/DiskStorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/impementations/DiskStorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/impementations/S3StorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/impementations/S3StorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/impementations/S3StorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/impementations/S3StorageProvider.ts',
          createDiskStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
          createIStorage(),
          error => {
            if (error) throw error;
          },
        );
      }
      if (
        !fs.existsSync(
          'src/shared/container/providers/StorageProvider/index.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/index.ts',
          createStorageIndex(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/StorageProvider/index.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/StorageProvider/index.ts',
          createStorageIndex(),
          error => {
            if (error) throw error;
          },
        );
      }
      console.log(`StorageProvider ${messages.created}`);
      break;
    default:
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.providerNotFound,
        '\x1b[0m',
      );
      break;
  }
}
