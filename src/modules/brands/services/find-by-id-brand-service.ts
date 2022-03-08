import AppError from "src/shared/errors/app-error";
import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class FindByIdBrandService {
  constructor(private brandsRepository: IBrandsRepository) { }
  public async execute(id: string): Promise<Brands | undefined> {
    if (!id || id === undefined || id === null) {
      throw new AppError('id must be provided', 400)
    }
    const brandFound = await this.brandsRepository.findById(id);
    return brandFound;
  }
}
