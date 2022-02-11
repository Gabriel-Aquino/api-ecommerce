import { BaseEntity } from "src/shared/utils/base-entity";
import { Column } from "typeorm";

export class Brands extends BaseEntity {
  @Column()
  name: string;
}
