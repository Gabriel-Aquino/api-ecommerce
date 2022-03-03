import express, { NextFunction, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import mainRoute from './shared/infra/http/main-route';
import connection from './shared/infra/typeorm';
import { HttpRequest } from './shared/presentation/protocols/http';
import AppError from './shared/errors/app-error';

connection();

const app = express();

app.use(express.json());
app.use(mainRoute);

app.use((err: Error, request: HttpRequest, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(`ERROR: ${err}`);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});


app.listen(3333, () => {
  console.log('Server has been started at http://localhost:3333');
});
