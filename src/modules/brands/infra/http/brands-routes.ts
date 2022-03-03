import { Router } from "express";
import { CreateBrandsController } from "../controllers/create-brand-controller";

const brandsRoutes = Router();

const createBrandsController = new CreateBrandsController();

brandsRoutes.post('/create', createBrandsController.handle);

export default brandsRoutes;
