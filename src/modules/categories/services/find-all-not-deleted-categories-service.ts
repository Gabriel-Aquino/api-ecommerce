import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class FindAllNotDeletedCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute(): Promise<Categories[]> {
    const allCategories = await this.categoriesRepository.findNotDeleted();
    return allCategories;
  }
}
