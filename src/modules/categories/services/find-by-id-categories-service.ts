import AppError from "src/shared/errors/app-error";
import { UUIDv4 } from "uuid-v4-validator";
import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class FindByIdCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute(id: string): Promise<Categories | undefined> {
    if (!UUIDv4.validate(id)) {
      throw new AppError('id must be provided', 400);
    }

    const categoryFound = await this.categoriesRepository.findById(id);
    return categoryFound;
  }
}
