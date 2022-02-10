import { MissingParamError } from 'src/shared/errors/missing-param-error';
import { ClientTablesDTO } from '../dtos/client-tables-dto';
import { ClientTables } from '../infra/typeorm/entities/client-tables-entity';
import { ClientTablesRepositoryInterface } from '../repository/protocols/client-tables-interface-repository';

export class CreateClientTableService {
  private clientTablesRepository: ClientTablesRepositoryInterface;

  constructor(clientTablesRepository: ClientTablesRepositoryInterface) {
    this.clientTablesRepository = clientTablesRepository;
  }

  public async execute({ name }: ClientTablesDTO): Promise<ClientTables> {
    if (!name) {
      throw new MissingParamError('Name');
    }

    const clientTable = await this.clientTablesRepository.create({ name });

    return clientTable;
  }
}
