import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { BrandsRepository } from "../../repositories/brands-repository";
import { GetAllBrandsWithoutDeletedService } from "../../services/get-all-brands-without-deleted-service";

export class GetAllBrandsWithoutDeletedController {
  public async handle(_: HttpRequest, response: Response): Promise<Response> {
    const brandsRepository = new BrandsRepository();
    const getAllBrandsWithoutDeletedService = new GetAllBrandsWithoutDeletedService(brandsRepository);

    const allBrandsWithoutDeleted = await getAllBrandsWithoutDeletedService.execute();

    return response.status(200).json(allBrandsWithoutDeleted);
  }
}
