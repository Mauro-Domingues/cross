export class CreateMigrationIndex {
  public execute(): string {
    return `import { MysqlDataSource } ${'from'} './dataSources/mysqlDataSource';

async function mysqlMigrations(): Promise<void> {
  const mysql = MysqlDataSource(process.env.MYSQL_DATABASE);

  if (!mysql.isInitialized) {
    await mysql.initialize();
  }

  await mysql.runMigrations();
  return mysql.destroy();
}

(async function runMigrations(): Promise<void> {
  return mysqlMigrations();
})();
`;
  }
}
