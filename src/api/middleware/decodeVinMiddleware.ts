import axios from "axios";
import * as express from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";


export class DecodeVinMiddleware implements ExpressMiddlewareInterface {
  use(req: express.Request, res: express.Response, next?: express.NextFunction): void {
    const { vin } = req.body;

    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`)
      .then((response) =>{
        req.body.make = response.data.Results[6].Value;
        req.body.model = response.data.Results[8].Value;
        req.body.year = response.data.Results[9].Value;
        return next();
      })
      .catch((error) => {
        console.log(error);
        return next();
      });
  }
}