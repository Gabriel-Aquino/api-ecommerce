import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsSize1646247582877 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_size',
      columns: [{
        name: 'id',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
        isPrimary: true
      }, {
        name: 'size',
        type: 'integer',
        isNullable: false
      },
      {
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
    await queryRunner.dropTable('products_size');
  }

}
