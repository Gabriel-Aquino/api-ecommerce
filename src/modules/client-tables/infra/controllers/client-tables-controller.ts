import { Response } from 'express';
import { Controller } from 'src/shared/presentation/protocols/controller';
import { HttpRequest, HttpResponse } from 'src/shared/presentation/protocols/http';
import { ClientTablesRepository } from '../../repository/client-tables-repository';
import { CreateClientTableService } from '../../services/create-client-tables-service';

export class CreateClientTablesController implements Controller {
  async handle(httpRequest: HttpRequest, response: Response): Promise<HttpResponse> {
    const clientTablesRepository = new ClientTablesRepository();
    const createClientTablesService = new CreateClientTableService(clientTablesRepository);

    const { name } = httpRequest.body;
    const createClientTable = await createClientTablesService.execute({ name });

    return response.status(200).json(createClientTable) as HttpResponse;
  }
}
