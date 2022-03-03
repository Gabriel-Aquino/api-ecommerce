import { Router } from 'express';
import brandsRoutes from 'src/modules/brands/infra/http/brands-routes';

const mainRoute = Router();

mainRoute.use('/api/brands', brandsRoutes);

export default mainRoute;
