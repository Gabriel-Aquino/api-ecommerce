import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsCategories1646249379062 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_categories',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isUnique: true,
        isNullable: false
      }, {
        name: 'products_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
      }, {
        name: 'categories_id',
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
        },
        {
          name: 'FKCategories',
          referencedTableName: 'categories',
          referencedColumnNames: ['id'],
          columnNames: ['categories_id'],
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_categories')
  }

}
