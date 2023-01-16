"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEditorConfig;
function createEditorConfig() {
  return `root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false`;
}