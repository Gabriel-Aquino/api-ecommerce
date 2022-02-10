import express from 'express';
import mainRoute from './shared/infra/http/main-route';
import 'express-async-errors';
import connection from './shared/infra/typeorm';

connection();

const app = express();

app.use(express.json());
app.use(mainRoute);

app.listen(3333, () => {
  console.log('Server has been started at http://localhost:3333');
});
