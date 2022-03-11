import AppError from "src/shared/errors/app-error";
import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class FindByNameNotDeletedCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute(name: string): Promise<Categories[]> {
    if (!name || name === '' || name === undefined) {
      throw new AppError('name must be provided', 400);
    }

    const categories = await this.categoriesRepository.findByNameNotDeleted(name);
    return categories;
  }
}
