import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { FindByIdNotDeletedCategoriesService } from "../../services/find-by-id-not-deleted-categories-service";

export class FindByIdNotDeletedCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.params;
    const categoriesRepository = new CategoriesRepository();
    const findByIdCategoriesService = new FindByIdNotDeletedCategoriesService(categoriesRepository);

    const category = await findByIdCategoriesService.execute(id);
    return response.status(200).json(category);
  }
}
