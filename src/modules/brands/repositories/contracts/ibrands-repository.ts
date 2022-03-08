import { IRepository } from "src/shared/presentation/protocols/repository";
import { BrandsDTO } from "../../dtos/brands-dto";
import { Brands } from "../../infra/typeorm/entities/brands-entity";

export interface IBrandsRepository extends IRepository<BrandsDTO, Brands> {
  findAllWithoutDeleted(): Promise<Brands[]>;
  findByIdWithoutDeleted(id: string): Promise<Brands | undefined>;
  findByNameWithoutDeleted(name: string): Promise<Brands[] | undefined>;
}
