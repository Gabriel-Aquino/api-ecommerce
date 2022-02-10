import { Repository } from 'src/shared/presentation/protocols/repository';
import { ClientTablesDTO } from '../../dtos/client-tables-dto';
import { ClientTables } from '../../infra/typeorm/entities/client-tables-entity';

export interface ClientTablesRepositoryInterface extends Repository<ClientTablesDTO, ClientTables>{
  findNotDeleted(): Promise<ClientTables[]>;
  findByIdNotDeleted(id: string): Promise<ClientTables | undefined>;
  findByNameNotDeleted(name: string): Promise<ClientTables[] | undefined>;
}
