import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsImages1646265682834 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_images',
      columns: [{
        name: 'id',
        type: 'uuid',
        isNullable: false,
        isPrimary: true,
        isUnique: true
      }, {
        name: 'url',
        type: 'varchar',
        isNullable: false,
      }, {
        name: 'path',
        type: 'varchar',
        isNullable: false,
      }, {
        name: 'products_sku_id',
        type: 'uuid',
        isNullable: false,
        isUnique: true
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
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_images');
  }

}
