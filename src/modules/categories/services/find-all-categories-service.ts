import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class FindAllCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute(): Promise<Categories[]> {
    const allCategories = await this.categoriesRepository.find();
    return allCategories;
  }
}
