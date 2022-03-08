import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { DeleteBrandsService } from "../../services/delete-brands-service";

export class DeleteBrandsController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.body;
    const brandsRepository = new BrandsRepository();
    const deleteBrandsService = new DeleteBrandsService(brandsRepository);

    await deleteBrandsService.execute(id);

    return response.status(204).json()
  }
}
