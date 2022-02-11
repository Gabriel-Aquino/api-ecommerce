import { getRepository, Repository } from 'typeorm';
import { ClientTablesDTO } from '../dtos/client-tables-dto';
import { ClientTables } from '../infra/typeorm/entities/client-tables-entity';
import { ClientTablesRepositoryInterface } from './contracts/client-tables-interface-repository';

export class ClientTablesRepository implements ClientTablesRepositoryInterface {
  private ormRepository: Repository<ClientTables>;

  constructor() {
    this.ormRepository = getRepository(ClientTables);
  }

  async create({ name }: ClientTablesDTO): Promise<ClientTables> {
    const createClientTable = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(createClientTable);
    return createClientTable;
  }

  async find(): Promise<ClientTables[]> {
    const findClientTables = await this.ormRepository.find({ withDeleted: true });
    return findClientTables;
  }

  async findNotDeleted(): Promise<ClientTables[]> {
    const findNotDeletedClientTables = await this.ormRepository.find();
    return findNotDeletedClientTables;
  }

  async findById(id: string): Promise<ClientTables | undefined> {
    const findClientTablesById = await this.ormRepository.findOne({ id }, { withDeleted: true });
    return findClientTablesById;
  }

  async findByIdNotDeleted(id: string): Promise<ClientTables | undefined> {
    const findClientTablesNotDeletedById = await this.ormRepository.findOne({ id });
    return findClientTablesNotDeletedById;
  }

  async findByName(name: string): Promise<ClientTables[] | undefined> {
    const findClientTablesByName = await this.ormRepository
      .createQueryBuilder()
      .where(
        'LOWER(name) LIKE :name',
        { name: `${name.toLowerCase()}` },
      ).withDeleted().getMany();

    return findClientTablesByName;
  }

  async findByNameNotDeleted(name: string): Promise<ClientTables[] | undefined> {
    const findClientTablesNotDeletedByName = await this.ormRepository
      .createQueryBuilder()
      .where(
        'LOWER(name) LIKE :name',
        { name: `%${name}%` },
      ).getMany();

    return findClientTablesNotDeletedByName;
  }

  async save(data: ClientTables): Promise<ClientTables> {
    return this.ormRepository.save(data);
  }

  async remove(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }

  async recover(id: string): Promise<void> {
    await this.ormRepository.restore(id);
  }
}
