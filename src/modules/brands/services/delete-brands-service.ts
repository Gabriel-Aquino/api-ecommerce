import AppError from "src/shared/errors/app-error";
import { UUIDv4 } from "uuid-v4-validator";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class DeleteBrandsService {
  constructor(private brandsRepository: IBrandsRepository) { }

  public async execute(id: string): Promise<void> {
    if (!UUIDv4.validate(id)) {
      throw new AppError('id must be provided', 400);
    }
    const findBrandById = await this.brandsRepository.findById(id);
    if (!findBrandById) {
      throw new AppError('brand not found', 400);
    }

    await this.brandsRepository.remove(id);
  }
}
