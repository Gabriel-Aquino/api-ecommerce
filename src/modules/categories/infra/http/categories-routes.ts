import { Router } from "express";
import { CreateCategoriesController } from "../controllers/create-categories-controller";
import { FindALlCategoriesController } from "../controllers/find-all-categories-controller";

const categoriesRoutes = Router();

const createCategoriesController = new CreateCategoriesController();
const findAllCategoriesController = new FindALlCategoriesController()

categoriesRoutes.post('/create', createCategoriesController.handle);

categoriesRoutes.get('/admin', findAllCategoriesController.handle);


export default categoriesRoutes;
