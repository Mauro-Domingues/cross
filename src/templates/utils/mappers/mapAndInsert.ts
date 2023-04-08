import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateMapAndInsert {
  private messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndInsertAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Entity {
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      Object.assign(oldAttributes, {
        [attribute]: newAttributes[attribute],
      });
    }
  }
  return oldAttributes;
}
`;
  }
}
