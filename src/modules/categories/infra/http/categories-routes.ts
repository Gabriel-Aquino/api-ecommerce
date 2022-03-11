import { Router } from "express";
import { CreateCategoriesController } from "../controllers/create-categories-controller";
import { DeleteCategoriesController } from "../controllers/delete-categories-controller";
import { FindALlCategoriesController } from "../controllers/find-all-categories-controller";
import { FindAllNotDeletedCategoriesController } from "../controllers/find-all-not-deleted-categories-controller";
import { FindByIdCategoriesController } from "../controllers/find-by-id-categories-controller";
import { FindByIdNotDeletedCategoriesController } from "../controllers/find-by-id-not-deleted-categories-controller";
import { FindByNameNotDeletedCategoriesController } from "../controllers/find-by-name--not-deleted-categories-controller";
import { FindByNameCategoriesController } from "../controllers/find-by-name-categories-controller";
import { RecoverCategoriesController } from "../controllers/recover-categories-controller";
import { UpdateCategoriesController } from "../controllers/update-categories-controller";

const categoriesRoutes = Router();

const createCategoriesController = new CreateCategoriesController();
const findAllNotDeletedCategoriesController = new FindAllNotDeletedCategoriesController();
const findByIdNotDeletedCategoriesController = new FindByIdNotDeletedCategoriesController();
const findByNameNotDeletedCategoriesController = new FindByNameNotDeletedCategoriesController();

const findAllCategoriesController = new FindALlCategoriesController();
const findByIdCategoriesController = new FindByIdCategoriesController();
const findByNameCategoriesController = new FindByNameCategoriesController();
const recoverCategoriesController = new RecoverCategoriesController();
const updateCategoriesController = new UpdateCategoriesController();
const deleteCategoriesController = new DeleteCategoriesController();

categoriesRoutes.post('/create', createCategoriesController.handle);
categoriesRoutes.get('/', findAllNotDeletedCategoriesController.handle);
categoriesRoutes.get('/id=:id', findByIdNotDeletedCategoriesController.handle);
categoriesRoutes.get('/name=:name', findByNameNotDeletedCategoriesController.handle);

categoriesRoutes.get('/admin', findAllCategoriesController.handle);
categoriesRoutes.get('/admin/id=:id', findByIdCategoriesController.handle);
categoriesRoutes.get('/admin/name=:name', findByNameCategoriesController.handle);
categoriesRoutes.put('/admin/recover', recoverCategoriesController.handle)
categoriesRoutes.put('/admin', updateCategoriesController.handle);
categoriesRoutes.delete('/admin', deleteCategoriesController.handle);


export default categoriesRoutes;
