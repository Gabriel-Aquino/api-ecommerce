import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { FindAllNotDeletedCategoriesService } from "../../services/find-all-not-deleted-categories-service";

export class FindAllNotDeletedCategoriesController {
  public async handle(_: HttpRequest, response: Response): Promise<Response> {
    const categoriesRepository = new CategoriesRepository();
    const findAllNotDeletedCategoriesService = new FindAllNotDeletedCategoriesService(categoriesRepository);

    const allCategories = await findAllNotDeletedCategoriesService.execute();

    return response.status(200).json(allCategories);
  }
}
