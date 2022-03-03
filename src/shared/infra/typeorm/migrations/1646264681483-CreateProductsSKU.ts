import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsSKU1646264681483 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_sku',
      columns: [{
        name: 'id',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
        isPrimary: true
      }, {
        name: 'name',
        type: 'varchar',
        isNullable: false
      }, {
        name: 'description',
        type: 'varchar',
        isNullable: false
      }, {
        name: 'quantity',
        type: 'integer',
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
      }, {
        name: 'products_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
      }, {
        name: 'products_price_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
      }, {
        name: 'products_dimensions_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
      }],
      foreignKeys: [
        {
          name: 'FKProducts',
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
          columnNames: ['products_id'],
        }, {
          name: 'FKProductsPrice',
          referencedTableName: 'products_price',
          referencedColumnNames: ['id'],
          columnNames: ['products_price_id'],
        }, {
          name: 'FKProductsDimensions',
          referencedTableName: 'products_dimensions',
          referencedColumnNames: ['id'],
          columnNames: ['products_dimensions_id'],
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_sku')
  }

}
