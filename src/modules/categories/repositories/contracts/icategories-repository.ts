import { IRepository } from "src/shared/presentation/protocols/repository";
import { CategoriesDTO } from "../../dtos/categories-dto";
import { Categories } from "../../infra/typeorm/entities/categories-entity";

export interface ICategoriesRepository extends IRepository<CategoriesDTO, Categories> {
  findNotDeleted(): Promise<Categories[]>;
  findByIdNotDeleted(id: string): Promise<Categories | undefined>;
  findByNameNotDeleted(name: string): Promise<Categories[]>;
}
