"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMapAndUpdate;
var _messages = _interopRequireDefault(require("../../../tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndUpdate() {
  return `/**
 * ${_messages.default.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  const updatedAttributes: any = oldAttributes;
  for (const attribute in newAttributes) {
    if (oldAttributes?.hasOwnProperty(attribute)) {
      updatedAttributes[attribute] = newAttributes[attribute];
    }
  }
  return updatedAttributes;
}
`;
}