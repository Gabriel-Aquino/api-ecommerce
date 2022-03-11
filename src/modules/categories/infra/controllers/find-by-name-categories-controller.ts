import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { FindByNameCategoriesService } from "../../services/find-by-name-categories-service";

export class FindByNameCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { name } = httpRequest.params;
    const categoriesRepository = new CategoriesRepository();
    const findByNameCategoriesService = new FindByNameCategoriesService(categoriesRepository);

    const categories = await findByNameCategoriesService.execute(name);
    return response.status(200).json(categories);
  }
}
