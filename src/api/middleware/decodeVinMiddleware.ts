import axios from "axios";
import * as express from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";


export class DecodeVinMiddleware implements ExpressMiddlewareInterface {
  use(req: express.Request, res: express.Response, next?: express.NextFunction): void {
    const { vin } = req.body;

    /** EXTRACT MAKE, MODEL, AND YEAR FROM DECODED VIN */
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`)
      .then((response) =>{
        console.log(response.data);
        req.body.make = response.data.Results[6].Value;
        req.body.model = response.data.Results[8].Value;
        req.body.year = response.data.Results[9].Value;
        next();
      })
      .catch((error) => {
        /** SEND ERROR STATUS AND MESSAGE ON INVALID VIN*/
        return res.send({
          status: error.message,
          message: error.response.statusText
        });
      });
  }
}