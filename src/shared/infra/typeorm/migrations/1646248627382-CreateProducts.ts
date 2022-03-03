import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1646248627382 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
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
        type: 'varchar'
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
      }, {
        name: 'brands_id',
        type: 'uuid',
        isUnique: true,
        isNullable: false
      }],
      foreignKeys: [
        {
          name: 'FKBrands',
          referencedTableName: 'brands',
          referencedColumnNames: ['id'],
          columnNames: ['brands_id'],
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products')
  }

}
