import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsDimensions1646263957107 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_dimensions',
      columns: [{
        name: 'id',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
        isPrimary: true
      }, {
        name: 'weight',
        type: 'decimal'
      }, {
        name: 'height',
        type: 'decimal'
      }, {
        name: 'length',
        type: 'decimal'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false
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
    await queryRunner.dropTable('products_dimensions')
  }

}
