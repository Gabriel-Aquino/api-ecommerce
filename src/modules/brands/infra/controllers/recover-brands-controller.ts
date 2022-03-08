import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { RecoverBrandsService } from "../../services/recover-brands-service";

export class RecoverBrandsController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.body;
    const brandsRepository = new BrandsRepository();
    const recoverBrandsService = new RecoverBrandsService(brandsRepository);

    await recoverBrandsService.execute(id);

    return response.status(200).json();
  }
}
