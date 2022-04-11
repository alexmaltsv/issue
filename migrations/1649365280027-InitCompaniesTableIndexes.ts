import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class InitCompaniesTableIndexes1649365280027
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      'companies',
      new TableIndex({
        name: 'companies_cityId_idx',
        columnNames: ['cityId'],
      }),
    );

    await queryRunner.createIndex(
      'companies',
      new TableIndex({
        name: 'companies_specialityIds_idx',
        columnNames: ['specialityIds'],
      }),
    );

    await queryRunner.query(
      `CREATE INDEX "companies_title_idx" ON app.companies (LOWER(title))`,
    );

    await queryRunner.query(
      `CREATE INDEX "companies_createdAt_idx" ON app.companies ("createdAt" DESC)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('app.companies', 'companies_title_idx');
    await queryRunner.dropIndex('app.companies', 'companies_createdAt_idx');
    await queryRunner.dropIndex('app.companies', 'companies_specialityIds_idx');
    await queryRunner.dropIndex('app.companies', 'companies_cityId_idx');
  }
}
