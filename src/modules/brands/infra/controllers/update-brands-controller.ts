import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { UpdateBrandsService } from "../../services/update-brands-service";

export class UpdateBrandsController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id, name } = httpRequest.body;
    const brandsRepository = new BrandsRepository();
    const updateBrandsService = new UpdateBrandsService(brandsRepository);

    const brandToUpdate = await updateBrandsService.execute({ id, name });

    return response.status(200).json(brandToUpdate);
  }
}
