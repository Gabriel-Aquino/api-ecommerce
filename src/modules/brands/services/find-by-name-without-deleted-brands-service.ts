import AppError from "src/shared/errors/app-error";
import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class FindByNameWithoutDeletedBrandService {
  constructor(private brandsRepository: IBrandsRepository) { }

  public async execute(name: string): Promise<Brands[]> {
    if (!name || name === '' || name === undefined) {
      throw new AppError('name must be provided', 400);
    }

    const brandsFound = await this.brandsRepository.findByNameWithoutDeleted(name);

    return brandsFound;
  }
}
