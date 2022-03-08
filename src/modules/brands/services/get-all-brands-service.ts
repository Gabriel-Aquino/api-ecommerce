import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class GetAllBrandsService {
  constructor(private brandsRepository: IBrandsRepository) { }

  public async execute(): Promise<Brands[]> {
    const allBrands = await this.brandsRepository.find();

    return allBrands
  }
}
