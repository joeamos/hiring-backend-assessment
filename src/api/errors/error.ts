import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
import * as express from "express";

@Middleware({ type: "after" })
export class GlobalErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: express.ErrorRequestHandler, request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log("do something...");
    next();
  }
}