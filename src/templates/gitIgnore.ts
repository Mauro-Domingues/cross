export default function createGitIgnore(): string {
  return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/coverage
/.env
/dist
/tmp
`;
}
