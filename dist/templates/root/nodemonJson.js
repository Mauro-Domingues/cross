"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createNodemonJson;
function createNodemonJson() {
  return `{
  "execMap":{
      "js": "node -r sucrase/register"
  }
}`;
}