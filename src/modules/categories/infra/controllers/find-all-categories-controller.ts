import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { FindAllCategoriesService } from "../../services/find-all-categories-service";

export class FindALlCategoriesController {
  public async handle(_: HttpRequest, response: Response): Promise<Response> {
    const categoriesRepository = new CategoriesRepository();
    const findAllCategoriesRepository = new FindAllCategoriesService(categoriesRepository)

    const allCategories = await findAllCategoriesRepository.execute();

    return response.status(200).json(allCategories);
  }
}
