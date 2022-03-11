import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { RecoverCategoriesService } from "../../services/recover-categories-service";

export class RecoverCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { id } = httpRequest.body;
    const categoriesRepository = new CategoriesRepository();
    const recoverCategoriesService = new RecoverCategoriesService(categoriesRepository);

    await recoverCategoriesService.execute(id);

    return response.status(200).json();
  }
}
