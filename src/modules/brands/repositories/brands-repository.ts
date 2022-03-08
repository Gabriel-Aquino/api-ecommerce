import { getRepository, Repository } from "typeorm";
import { BrandsDTO } from "../dtos/brands-dto";
import { Brands } from "../infra/typeorm/entities/brands-entity";
import { IBrandsRepository } from "./contracts/ibrands-repository";

export class BrandsRepository implements IBrandsRepository {
  private ormRepository: Repository<Brands>;

  constructor() {
    this.ormRepository = getRepository(Brands);
  }
  async create({ name }: BrandsDTO): Promise<Brands> {
    const createBrand = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(createBrand);
    return createBrand;
  }
  async find(): Promise<Brands[]> {
    const findAllBrands = await this.ormRepository.find({ withDeleted: true });
    return findAllBrands;
  }
  async findAllWithoutDeleted(): Promise<Brands[]> {
    const findNotDeletedBrands = await this.ormRepository.find();
    return findNotDeletedBrands;
  }
  async findById(id: string): Promise<Brands | undefined> {
    const findBrandsById = await this.ormRepository.findOne(id, { withDeleted: true })
    return findBrandsById
  }
  async findByIdWithoutDeleted(id: string): Promise<Brands | undefined> {
    const findBrandsByIdNotDeleted = await this.ormRepository.findOne(id);
    return findBrandsByIdNotDeleted;
  }
  async findByName(name: string): Promise<Brands[] | undefined> {
    const findBrandsByName = await this.ormRepository
      .createQueryBuilder()
      .where(
        'LOWER(name) LIKE :name',
        { name: `${name.toLowerCase()}` },
      ).withDeleted().getMany();

    return findBrandsByName;
  }
  async findByNameWithoutDeleted(name: string): Promise<Brands[] | undefined> {
    const findBrandsNotDeletedByName = await this.ormRepository
      .createQueryBuilder()
      .where(
        'LOWER(name) LIKE :name',
        { name: `%${name}%` },
      ).getMany();

    return findBrandsNotDeletedByName;
  }
  async save(data: Brands): Promise<Brands> {
    return this.ormRepository.save(data);
  }
  async remove(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }
  async recover(id: string): Promise<void> {
    await this.ormRepository.restore(id);
  }

}
