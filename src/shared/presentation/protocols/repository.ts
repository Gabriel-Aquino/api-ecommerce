import { BaseEntity } from 'src/shared/utils/base-entity';

export interface IRepository<BaseDTO, A extends BaseEntity> {
  create(dto: BaseDTO): Promise<A>;
  find(): Promise<A[]>;
  findById(id: string): Promise<A | undefined>;
  findByName(name: string): Promise<A[] | undefined>;
  save(data: A): Promise<A>;
  remove(id: string): Promise<void>;
  recover(id: string): Promise<void>;
}
