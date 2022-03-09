import { getRepository, Repository } from "typeorm";
import { CategoriesDTO } from "../dtos/categories-dto";
import { Categories } from "../infra/typeorm/entities/categories-entity";
import { ICategoriesRepository } from "./contracts/icategories-repository";

export class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Categories>;
  constructor() {
    this.ormRepository = getRepository(Categories);
  }
  async create({ name }: CategoriesDTO): Promise<Categories> {
    const createCategory = this.ormRepository.create({
      name
    });

    await this.ormRepository.save(createCategory);
    return createCategory;
  }
  async find(): Promise<Categories[]> {
    const allCategories = await this.ormRepository.find({ withDeleted: true })
    console.log(allCategories);
    return allCategories;
  }
  async findNotDeleted(): Promise<Categories[]> {
    const allCategoriesNotDeleted = await this.ormRepository.find()
    return allCategoriesNotDeleted;
  }
  async findById(id: string): Promise<Categories | undefined> {
    const findCategoryById = await this.ormRepository.findOne(id, { withDeleted: true })
    return findCategoryById;
  }
  async findByIdNotDeleted(id: string): Promise<Categories | undefined> {
    const findCategoryById = await this.ormRepository.findOne(id)
    return findCategoryById;
  }
  async findByName(name: string): Promise<Categories[]> {
    const findCategoriesByName = await this.ormRepository.createQueryBuilder().where(
      'LOWER(name) LIKE : name', {
      name: `%${name.toLowerCase()}%`
    }).withDeleted().getMany();

    return findCategoriesByName;
  }
  async findByNameNotDeleted(name: string): Promise<Categories[]> {
    const findCategoriesByNameNotDeleted = await this.ormRepository.createQueryBuilder().where(
      'LOWER(name) LIKE : name', {
      name: `%${name.toLowerCase()}%`
    }).getMany();

    return findCategoriesByNameNotDeleted;
  }
  async save(data: Categories): Promise<Categories> {
    return this.ormRepository.save(data);
  }
  async remove(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }
  async recover(id: string): Promise<void> {
    await this.ormRepository.restore(id);
  }

}
