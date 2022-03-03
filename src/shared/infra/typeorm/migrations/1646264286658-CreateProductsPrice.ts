import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsPrice1646264286658 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_price',
      columns: [{
        name: 'id',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
        isPrimary: true
      }, {
        name: 'price',
        type: 'decimal',
        isNullable: false
      }, {
        name: 'list_price',
        type: 'decimal'
      }, {
        name: 'discount_price',
        type: 'decimal',
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
    await queryRunner.dropTable('products_price')
  }

}
