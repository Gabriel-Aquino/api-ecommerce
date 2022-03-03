import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsSizeSKURelationship1646265518066 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_sku_products_size',
      columns: [{
        name: 'products_size_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
      }, {
        name: 'products_sku_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
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
      }],
      foreignKeys: [{
        name: 'FKProductsSKU',
        referencedTableName: 'products_sku',
        referencedColumnNames: ['id'],
        columnNames: ['products_sku_id']
      }, {
        name: 'FKProductsSize',
        referencedTableName: 'products_size',
        referencedColumnNames: ['id'],
        columnNames: ['products_size_id']
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_sku_products_size')
  }

}
