import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { FindByIdCategoriesService } from "../../services/find-by-id-categories-service";

export class FindByIdCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.params;
    const categoriesRepository = new CategoriesRepository();
    const findByIdCategoriesService = new FindByIdCategoriesService(categoriesRepository);

    const category = await findByIdCategoriesService.execute(id);
    return response.status(200).json(category);
  }
}
