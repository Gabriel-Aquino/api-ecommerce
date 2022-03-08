import { Router } from "express";
import { CreateBrandsController } from "../controllers/create-brand-controller";
import { FindByIdBrandController } from "../controllers/find-by-id-brand-controller";
import { GetAllBrandsController } from "../controllers/get-all-brands-controller";
import { GetAllBrandsWithoutDeletedController } from "../controllers/get-all-brands-without-deleted-controller";

const brandsRoutes = Router();

const createBrandsController = new CreateBrandsController();
const getAllBrandsController = new GetAllBrandsController();
const getAllBrandsWithoutDeletedController = new GetAllBrandsWithoutDeletedController();
const findByIdBrandController = new FindByIdBrandController();

brandsRoutes.post('/create', createBrandsController.handle);
brandsRoutes.get('/', getAllBrandsWithoutDeletedController.handle);
brandsRoutes.get('/admin', getAllBrandsController.handle)
brandsRoutes.get('/admin/:id', findByIdBrandController.handle)

export default brandsRoutes;
