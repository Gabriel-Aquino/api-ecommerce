import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { SeedsBrands } from "../seeds/brands-seed";

export class SeedBrands1646508432082 implements MigrationInterface {

  public async up(_: QueryRunner): Promise<void> {
    const brands = await getRepository('brands').save(SeedsBrands)
  }

  public async down(_: QueryRunner): Promise<void> {
  }

}
