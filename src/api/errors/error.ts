import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
import * as express from "express";

@Middleware({ type: "after" })
export class GlobalErrorHandler implements ExpressErrorMiddlewareInterface {
  error(err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(errorObj.message);
    next();
  }
}