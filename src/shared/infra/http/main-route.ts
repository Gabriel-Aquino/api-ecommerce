import { Router } from 'express';
import clientTablesRoute from 'src/modules/client-tables/infra/http/client-tables-routes';

const mainRoute = Router();

mainRoute.use('/api/tables', clientTablesRoute);

export default mainRoute;
