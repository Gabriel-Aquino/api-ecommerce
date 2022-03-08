import { BaseEntity } from '../../../../../shared/utils/base-entity';
import { Column, Entity } from "typeorm";

@Entity('categories')
export class Categories extends BaseEntity {
  @Column()
  name: string;
}
