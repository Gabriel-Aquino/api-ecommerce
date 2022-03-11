import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { DeleteCategoriesService } from "../../services/delete-categories-service";

export class DeleteCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.body;
    const categoriesRepository = new CategoriesRepository();
    const deleteCategoriesService = new DeleteCategoriesService(categoriesRepository);

    await deleteCategoriesService.execute(id)

    return response.status(204).json()
  }
}
