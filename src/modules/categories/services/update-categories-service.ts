import AppError from "src/shared/errors/app-error";
import { UUIDv4 } from "uuid-v4-validator";
import { UpdateCategoriesRequest } from "../dtos/update-categories-request";
import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class UpdateCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute({ id, name }: UpdateCategoriesRequest): Promise<Categories> {
    if (!UUIDv4.validate(id)) {
      throw new AppError('id must be provided', 400);
    }

    const findCategoryById = await this.categoriesRepository.findById(id);

    if (!findCategoryById) {
      throw new AppError('id not found', 400);
    }

    const CategoryToUpdate = {
      ...findCategoryById, name
    }
    await this.categoriesRepository.save(CategoryToUpdate);

    return CategoryToUpdate;
  }
}
