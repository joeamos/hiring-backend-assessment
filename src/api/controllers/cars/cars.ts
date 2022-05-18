import { Body, Get, JsonController, Post, Delete, Param, Patch, UseBefore, OnUndefined, } from "routing-controllers";
import { CarsEntity } from "../../models";
import { DecodeVinMiddleware } from "../../middleware/index";
import { CarNotFoundError } from "../../errors/index";
import bodyParser from "body-parser";

@JsonController("/cars")
export class CarController {
  @Get("/:id")
  @OnUndefined(CarNotFoundError)
  getOne(@Param("id") id: string): Promise<CarsEntity> {
    return CarsEntity.findOne(id);
  }

  @Get()
  getAll(): Promise<CarsEntity[]> {
    return CarsEntity.find();
  }

  @Post()
  @UseBefore(bodyParser.json(), DecodeVinMiddleware)
  create(@Body() body: Pick<CarsEntity, "id">): Promise<CarsEntity> {
    return CarsEntity.create(body).save();
  }

  @Patch("/:id")
  @OnUndefined(CarNotFoundError)
  patch(@Param("id") id: string, @Body() body: Partial<CarsEntity>) {
    return CarsEntity.update(id, body);
  }

  @Delete("/:id")
  @OnUndefined(CarNotFoundError)
  delete(@Param("id") id: string) {
    return CarsEntity.delete(id);
  }
}
