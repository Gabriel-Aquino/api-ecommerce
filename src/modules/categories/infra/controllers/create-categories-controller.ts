import { Response } from "express";
import { HttpRequest } from "src/shared/presentation/protocols/http";
import { CategoriesRepository } from "../../repositories/categories-repository";
import { CreateCategoriesService } from "../../services/create-categories-service";

export class CreateCategoriesController {
  public async handle(httpRequest: HttpRequest, response: Response): Promise<Response> {
    const { name } = httpRequest.body;
    const categoriesRepository = new CategoriesRepository();
    const createCategoriesService = new CreateCategoriesService(categoriesRepository);

    const createdCategory = await createCategoriesService.execute({ name });

    return response.status(200).json(createdCategory);
  }
}
