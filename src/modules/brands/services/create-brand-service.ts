import AppError from "../../../shared/errors/app-error";
import { BrandsDTO } from "../dtos/brands-dto";
import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class CreateBrandsService {
  constructor(private brandsRepository: IBrandsRepository) { }

  public async execute({ name }: BrandsDTO): Promise<Brands> {
    if (name === null || name === '') {
      throw new AppError('Name cannot be null', 400);
    }

    const createBrands = await this.brandsRepository.create({ name });

    return createBrands;
  }
}
