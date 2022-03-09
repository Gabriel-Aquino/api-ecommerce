import AppError from "src/shared/errors/app-error";
import { CategoriesDTO } from "../dtos/categories-dto";
import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class CreateCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute({ name }: CategoriesDTO): Promise<Categories> {
    if (!name || name === '' || name === undefined) {
      throw new AppError('name must be provided', 400);
    }

    const createCategory = await this.categoriesRepository.create({ name });
    return createCategory;
  }
}
