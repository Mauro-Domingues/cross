export class CreateBaseFakeRepository {
  public execute(): string {
    return `import { Base } from '@shared/modules/entities/Base';
import {
  DeepPartial,
  DeleteResult,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IBaseRepositoryDTO } from '../IBaseRepository';

export class FakeBaseRepository<Entity extends ObjectLiteral & Base>
  implements IBaseRepositoryDTO<Entity>
{
  public fakeOrmRepository: Entity[] = [];

  public patchRepository(): Entity[] {
    return this.fakeOrmRepository;
  }

  public async findBy(
    baseData: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<Entity | null> {
    let findEntity: Entity | undefined;
    if (baseData instanceof Array) {
      findEntity = this.fakeOrmRepository.find(entity =>
        baseData.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      findEntity = this.fakeOrmRepository.find(entity =>
        Object.entries(baseData).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
    }

    if (!findEntity) {
      return null;
    }
    return findEntity;
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<{ list: Entity[]; amount: number }> {
    let filtered: Entity[];
    if (!conditions) {
      filtered = this.fakeOrmRepository;
    } else if (conditions instanceof Array) {
      filtered = this.fakeOrmRepository.filter(entity =>
        conditions.some(property =>
          Object.entries(property).every(
            ([key, value]) => entity[key] === value && !entity.deleted_at,
          ),
        ),
      );
    } else {
      filtered = this.fakeOrmRepository.filter(entity =>
        Object.entries(conditions).every(
          ([key, value]) => entity[key] === value && !entity.deleted_at,
        ),
      );
    }

    const filtredEntities = filtered.slice((page - 1) * limit, page * limit);

    return { list: filtredEntities, amount: filtered.length };
  }

  public async findIn(
    propertyName: keyof Entity,
    baseData: Entity[keyof Entity][],
  ): Promise<Entity[]> {
    const entities = this.fakeOrmRepository.filter(entity =>
      baseData.includes(entity[propertyName]),
    );

    return entities;
  }

  public async findLike(baseData: { [key in keyof Entity]: string }): Promise<
    Entity[]
  > {
    const entities = this.fakeOrmRepository.filter(entity =>
      entity[Object.keys(baseData)[0]]
        .toString()
        .includes(Object.values(baseData)[0]),
    );

    return entities;
  }

  public async create(baseData: DeepPartial<Entity>): Promise<Entity> {
    const base = {
      ...baseData,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
    } as Entity;

    this.fakeOrmRepository.push(base);

    return base;
  }

  public async update(baseData: Entity): Promise<Entity> {
    const findEntity: number = this.fakeOrmRepository.findIndex(
      entity => entity.id === baseData.id,
    );

    this.fakeOrmRepository[findEntity] = baseData;
    this.fakeOrmRepository[findEntity].updated_at = new Date();

    return baseData;
  }

  public async delete(
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    const deleteEntities: Entity[] = this.fakeOrmRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );

    this.fakeOrmRepository = this.fakeOrmRepository.filter(
      entity => !deleteEntities.includes(entity),
    );

    return {
      raw: 'query to delete an Entity',
      affected: deleteEntities.length,
    };
  }

  public async softDelete(
    baseData: FindOptionsWhere<Entity>,
  ): Promise<DeleteResult> {
    const deleteEntities: Entity[] = this.fakeOrmRepository.filter(entity =>
      Object.entries(baseData).every(
        ([key, value]) => entity[key] === value && !entity.deleted_at,
      ),
    );

    deleteEntities.forEach(entity => {
      entity.deleted_at = new Date();
    });

    return {
      raw: 'query to softDelete an Entity',
      affected: deleteEntities.length,
    };
  }
}
`;
  }
}