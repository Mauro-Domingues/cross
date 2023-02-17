"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSecondLayer = makeSecondLayer;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = require("fs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeSecondLayer() {
  if (!(0, _fs.existsSync)('src/swagger.json')) {
    (0, _fs.appendFile)('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/swagger.json', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- swagger.json ${_messages.default.created}`, '\x1b[0m');
}