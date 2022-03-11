import AppError from "src/shared/errors/app-error";
import { BaseDTO } from "src/shared/utils/base-dto";
import { UUIDv4 } from "uuid-v4-validator";
import { UpdateBrandsRequest } from "../dtos/update-brands-request";
import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class UpdateBrandsService {
  constructor(private brandsRepository: IBrandsRepository) { }

  public async execute({ id, name }: UpdateBrandsRequest): Promise<Brands> {
    if (!UUIDv4.validate(id)) {
      throw new AppError('id must be provided', 400);
    }

    const findBrandById = await this.brandsRepository.findById(id);

    if (!findBrandById) {
      throw new AppError('id not found', 400);
    }

    const BrandToUpdate = {
      ...findBrandById, name
    }
    await this.brandsRepository.save(BrandToUpdate);

    return BrandToUpdate;
  }
}
