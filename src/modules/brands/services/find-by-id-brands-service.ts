import AppError from "src/shared/errors/app-error";
import { UUIDv4 } from "uuid-v4-validator";
import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class FindByIdBrandService {
  constructor(private brandsRepository: IBrandsRepository) { }
  public async execute(id: string): Promise<Brands | undefined> {
    if (!UUIDv4.validate(id)) {
      throw new AppError('id must be provided', 400)
    }
    const brandFound = await this.brandsRepository.findById(id);
    return brandFound;
  }
}
