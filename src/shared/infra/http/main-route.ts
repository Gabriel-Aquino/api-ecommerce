import { Router } from 'express';
import brandsRoutes from 'src/modules/brands/infra/http/brands-routes';
import categoriesRoutes from 'src/modules/categories/infra/http/categories-routes';

const mainRoute = Router();

mainRoute.use('/api/brands', brandsRoutes);
mainRoute.use('/api/categories', categoriesRoutes);

export default mainRoute;
