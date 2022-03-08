import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { SeedsCategories } from "../seeds/categories-seed";

export class SeedCategories1646782102037 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('categories').save(SeedsCategories)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
