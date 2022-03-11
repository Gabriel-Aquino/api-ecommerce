import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { UpdateCategoriesService } from "../../services/update-categories-service";

export class UpdateCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id, name } = httpRequest.body;
    const categoriesRepository = new CategoriesRepository();
    const updateCategoriesService = new UpdateCategoriesService(categoriesRepository);

    const categoryToUpdate = await updateCategoriesService.execute({ id, name });

    return response.status(200).json(categoryToUpdate);
  }
}
