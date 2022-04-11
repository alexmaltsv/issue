import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class InitCompaniesTable1649365280026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'app.companies',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'cityId',
            type: 'integer',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'logoUrl',
            type: 'varchar(255)',
          },
          {
            name: 'backgroundUrl',
            type: 'varchar(255)',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'specialityIds',
            type: 'integer',
            isArray: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['cityId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'app.cities',
            onDelete: 'CASCADE',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('app.specialities');
  }
}
