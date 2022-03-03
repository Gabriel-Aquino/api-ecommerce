import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsColor1646264522592 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products_color',
      columns: [{
        name: 'id',
        type: 'uuid',
        isNullable: false,
        isPrimary: true,
        isUnique: true
      }, {
        name: 'name',
        type: 'varchar',
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
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_color')
  }

}
