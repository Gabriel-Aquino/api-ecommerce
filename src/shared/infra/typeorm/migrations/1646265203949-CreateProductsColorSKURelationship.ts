import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsColorSKURelationship1646265203949 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_sku_products_color',
      columns: [{
        name: 'products_color_id',
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
        name: 'FKProductsColor',
        referencedTableName: 'products_color',
        referencedColumnNames: ['id'],
        columnNames: ['products_color_id']
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_sku_products_color')
  }

}
