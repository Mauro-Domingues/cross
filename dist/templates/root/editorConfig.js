export class CreateEditorConfig {
  execute() {
    return `root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false`;
  }
}
