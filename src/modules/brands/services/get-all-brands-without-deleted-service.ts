import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../repositories/contracts/ibrands-repository";

export class GetAllBrandsWithoutDeletedService {
  constructor(private brandsRepository: IBrandsRepository) { }

  public async execute(): Promise<Brands[]> {
    const allBrandsWithoutDeleted = await this.brandsRepository.findAllWithoutDeleted();
    return allBrandsWithoutDeleted;
  }
}
