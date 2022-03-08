import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { FindByNameWithoutDeletedBrandService } from "../../services/find-by-name-without-deleted-brands-service";

export class FindByNameWithoutDeletedBrandController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { name } = httpRequest.params;
    const brandsRepository = new BrandsRepository();
    const findByNameWithoutDeletedBrandService = new FindByNameWithoutDeletedBrandService(brandsRepository);

    const brandsFound = await findByNameWithoutDeletedBrandService.execute(name);

    return response.status(200).json(brandsFound);
  }
}
