import { Response } from 'express';
import { HttpRequest, HttpResponse } from './http';

export interface Controller{
  handle(httpRequest: HttpRequest, response: Response): Promise<HttpResponse>;
}
