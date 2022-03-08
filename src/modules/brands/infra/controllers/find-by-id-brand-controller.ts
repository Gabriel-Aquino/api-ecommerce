import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";

import { BrandsRepository } from "../../repositories/brands-repository";
import { FindByIdBrandService } from "../../services/find-by-id-brand-service";

export class FindByIdBrandController {

  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.params;
    const brandsRepository = new BrandsRepository();
    const findByIdBrandService = new FindByIdBrandService(brandsRepository);

    const brand = await findByIdBrandService.execute(id)
    return response.status(200).json(brand)
  }
}
