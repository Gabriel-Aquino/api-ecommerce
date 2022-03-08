import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { GetAllBrandsService } from "../../services/get-all-brands-service";

export class GetAllBrandsController {
  async handle(_: HttpRequest, response: Response): Promise<Response> {
    const brandsRepository = new BrandsRepository();
    const getAllBrandsService = new GetAllBrandsService(brandsRepository);

    const allBrands = await getAllBrandsService.execute()

    return response.status(200).json(allBrands)
  }
}
