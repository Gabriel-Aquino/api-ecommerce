import AppError from "src/shared/errors/app-error";
import { UUIDv4 } from "uuid-v4-validator";
import { ICategoriesRepository } from "../repositories/contracts/icategories-repository";

export class RecoverCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public async execute(id: string): Promise<void> {
    if (!UUIDv4.validate(id)) {
      throw new AppError('id must be provided', 400);
    }

    const findCategoryById = await this.categoriesRepository.findById(id);

    if (!findCategoryById) {
      throw new AppError('brand not found', 400);
    }

    await this.categoriesRepository.recover(id)
  }
}
