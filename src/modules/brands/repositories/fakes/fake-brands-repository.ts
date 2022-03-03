import { BrandsDTO } from "../../dtos/brands-dto";
import { Brands } from "../../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "../contracts/ibrands-repository";
import { v4 as uuid } from 'uuid'

export class FakeBrandsRepository implements IBrandsRepository {
  private brands: Brands[] = [];

  public async create({ name }: BrandsDTO): Promise<Brands> {
    const createBrand = new Brands();
    Object.assign(createBrand, { id: uuid(), name });
    this.brands.push(createBrand);

    return createBrand;
  }

  findNotDeleted(): Promise<Brands[]> {
    throw new Error("Method not implemented.");
  }
  findByIdNotDeleted(id: string): Promise<Brands | undefined> {
    throw new Error("Method not implemented.");
  }
  findByNameNotDeleted(name: string): Promise<Brands[] | undefined> {
    throw new Error("Method not implemented.");
  }

  find(): Promise<Brands[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Brands | undefined> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<Brands[] | undefined> {
    throw new Error("Method not implemented.");
  }
  save(data: Brands): Promise<Brands> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  recover(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
