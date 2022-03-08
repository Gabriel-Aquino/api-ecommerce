import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { FindByIdWithoutDeletedBrandService } from "../../services/find-by-id-without-deleted-brands-service";

export class FindByIdWithoutDeletedBrandController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.params;
    const brandsRepository = new BrandsRepository();
    const findByIdWithoutDeletedBrandService = new FindByIdWithoutDeletedBrandService(brandsRepository);

    const brandFound = await findByIdWithoutDeletedBrandService.execute(id);

    return response.status(200).json(brandFound);
  }
}
