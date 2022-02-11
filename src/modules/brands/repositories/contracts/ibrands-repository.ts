import { IRepository } from "src/shared/presentation/protocols/repository";
import { BrandsDTO } from "../../dtos/brands-dto";
import { Brands } from "../../infra/typeorm/entities/brands-entity";

export interface IBrandsRepository extends IRepository<BrandsDTO, Brands> {
  findNotDeleted(): Promise<Brands[]>;
  findByIdNotDeleted(id: string): Promise<Brands | undefined>;
  findByNameNotDeleted(name: string): Promise<Brands[] | undefined>;
}
