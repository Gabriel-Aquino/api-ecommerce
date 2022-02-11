import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBrands1644605382066 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'brands',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isUnique: true,
        isNullable: false
      }, {
        name: 'name',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: null,
        isNullable: true
      },
      {
        name: 'deleted_at',
        type: 'timestamp',
        default: null,
        isNullable: true,
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('brands')
  }

}
