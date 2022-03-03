import { BaseEntity } from '../../../../../shared/utils/base-entity';
import { Column, Entity } from "typeorm";

@Entity('brands')
export class Brands extends BaseEntity {
  @Column()
  name: string;
}
