import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsBrands1644605455848 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_brands',
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
        name: 'brands_id',
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
          name: 'FKBrands',
          referencedTableName: 'brands',
          referencedColumnNames: ['id'],
          columnNames: ['brands_id'],
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_brands')
  }

}
