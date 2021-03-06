import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { CreateBrandsService } from "../../services/create-brands-service";

export class CreateBrandsController {
  async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const brandsRepository = new BrandsRepository();
    const createBrandsService = new CreateBrandsService(brandsRepository);

    const { name } = httpRequest.body;
    const createBrand = await createBrandsService.execute({ name })

    return response.status(200).json(createBrand)
  }
}
