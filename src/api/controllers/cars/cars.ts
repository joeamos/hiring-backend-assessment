import { Body, Get, JsonController, Post, Delete, Param, Patch, UseBefore, OnUndefined, } from "routing-controllers";
import { CarsEntity } from "../../models";
import { DecodeVinMiddleware } from "../../middleware/index";
import { CarNotFoundError } from "../../errors/index";
import bodyParser from "body-parser";

@JsonController("/cars")
export class CarController {

  /** READ INFO FOR A SINGLE CAR RESOURCE */
  @Get("/:id")
  @OnUndefined(CarNotFoundError)
  getOne(@Param("id") id: string): Promise<CarsEntity> {
    return CarsEntity.findOne(id);
  }

  /** GET INFO FOR ALL CAR RESOURCES
   *  (not in scope of assessment, useful for testing)
   */
  @Get()
  getAll(): Promise<CarsEntity[]> {
    return CarsEntity.find();
  }

  /** SAVE NEW CAR RESOURCE IN DATABASE
   * - assumes client sends all information listed in UI sketch
   * - request body parsed before being sent to VIN decoding middleware
   * - middleware adds make, model & year to request body
  */
  @Post()
  @UseBefore(bodyParser.json(), DecodeVinMiddleware)
  create(@Body() body: Pick<CarsEntity, "id">): Promise<CarsEntity> {
    return CarsEntity.create(body).save();
  }

  /** UPDATE SPECIFIC COLUMNS IN A SINGLE CAR RESOURCE
  */
  @Patch("/:id")
  @OnUndefined(CarNotFoundError)
  patch(@Param("id") id: string, @Body() body: Partial<CarsEntity>) {
    return CarsEntity.update(id, body);
  }

  /** DELETE SINGLE CAR RESOURCE */
  @Delete("/:id")
  @OnUndefined(CarNotFoundError)
  delete(@Param("id") id: string) {
    return CarsEntity.delete(id);
  }
}
