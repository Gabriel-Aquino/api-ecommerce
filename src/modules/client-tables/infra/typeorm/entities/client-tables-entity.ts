import { BaseEntity } from 'src/shared/utils/base-entity';
import { Column, Entity } from 'typeorm';

@Entity('client-tables')
export class ClientTables extends BaseEntity {
  @Column()
  name: string;
}
