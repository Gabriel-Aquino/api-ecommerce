import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { FindByNameBrandService } from "../../services/find-by-name-brands-service";

export class FindByNameBrandController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { name } = httpRequest.params;
    const brandsRepository = new BrandsRepository();
    const findByNameBrandService = new FindByNameBrandService(brandsRepository);

    const brandsFound = await findByNameBrandService.execute(name);

    return response.status(200).json(brandsFound);
  }
}
