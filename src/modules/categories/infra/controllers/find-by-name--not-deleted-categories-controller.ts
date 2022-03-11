import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { FindByNameCategoriesService } from "../../services/find-by-name-categories-service";
import { FindByNameNotDeletedCategoriesService } from "../../services/find-by-name-not-deleted-categories-service";

export class FindByNameNotDeletedCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { name } = httpRequest.params;
    const categoriesRepository = new CategoriesRepository();
    const findByNameCategoriesService = new FindByNameNotDeletedCategoriesService(categoriesRepository);

    const categories = await findByNameCategoriesService.execute(name);
    return response.status(200).json(categories);
  }
}
