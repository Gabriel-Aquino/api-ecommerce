import { application, Router } from 'express';
import { CreateClientTablesController } from '../controllers/client-tables-controller';

const clientTablesRoute = Router();
const createClientTablesController = new CreateClientTablesController();

clientTablesRoute.post('/create', createClientTablesController.handle);

export default clientTablesRoute;
