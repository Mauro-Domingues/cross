"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIMail = createIMail;
function createIMail() {
  return `import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
`;
}