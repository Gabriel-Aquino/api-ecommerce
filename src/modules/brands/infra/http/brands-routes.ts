import { Router } from "express";
import { CreateBrandsController } from "../controllers/create-brands-controller";
import { DeleteBrandsController } from "../controllers/delete-brands-controller";
import { FindByIdBrandController } from "../controllers/find-by-id-brands-controller";
import { FindByIdWithoutDeletedBrandController } from "../controllers/find-by-id-without-deleted-brands-controller";
import { FindByNameBrandController } from "../controllers/find-by-name-brands-controller";
import { FindByNameWithoutDeletedBrandController } from "../controllers/find-by-name-without-deleted-brands-controller";
import { GetAllBrandsController } from "../controllers/get-all-brands-controller";
import { GetAllBrandsWithoutDeletedController } from "../controllers/get-all-brands-without-deleted-controller";
import { RecoverBrandsController } from "../controllers/recover-brands-controller";
import { UpdateBrandsController } from "../controllers/update-brands-controller";

const brandsRoutes = Router();

const createBrandsController = new CreateBrandsController();
const getAllBrandsWithoutDeletedController = new GetAllBrandsWithoutDeletedController();
const findByIdWithoutDeletedBrandController = new FindByIdWithoutDeletedBrandController();
const finByNameWithoutDeletedBrandController = new FindByNameWithoutDeletedBrandController();

const getAllBrandsController = new GetAllBrandsController();
const findByIdBrandController = new FindByIdBrandController();
const finByNameBrandController = new FindByNameBrandController();
const updateBrandsController = new UpdateBrandsController();
const deleteBrandsController = new DeleteBrandsController();
const recoverBrandsController = new RecoverBrandsController();

brandsRoutes.post('/create', createBrandsController.handle);
brandsRoutes.get('/', getAllBrandsWithoutDeletedController.handle);
brandsRoutes.get('/id=:id', findByIdWithoutDeletedBrandController.handle);
brandsRoutes.get('/name=:name', finByNameWithoutDeletedBrandController.handle);

brandsRoutes.get('/admin', getAllBrandsController.handle)
brandsRoutes.get('/admin/id=:id', findByIdBrandController.handle)
brandsRoutes.get('/admin/name=:name', finByNameBrandController.handle)
brandsRoutes.put('/admin', updateBrandsController.handle)
brandsRoutes.put('/admin/recover', recoverBrandsController.handle)
brandsRoutes.delete('/admin', deleteBrandsController.handle)

export default brandsRoutes;
