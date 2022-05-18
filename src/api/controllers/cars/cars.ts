import { Body, Get, JsonController, Post, Delete, Param, Patch } from "routing-controllers";
import { CarsEntity } from "../../models";


@JsonController("/cars")
export class CarController {
  @Get("/:id")
  getOne(@Param("id") id: string): Promise<CarsEntity> {
    return CarsEntity.findOne(id);
  }

  @Get()
  getAll(): Promise<CarsEntity[]> {
    return CarsEntity.find();
  }

  @Post()
  // @UseAfter(VINdecodeMiddleware)
  create(@Body() body: Pick<CarsEntity, "id">): Promise<CarsEntity> {
    return CarsEntity.create(body).save();
  }

  @Patch("/:id")
  patch(@Param("id") id: string, @Body() body: Partial<CarsEntity>) {
    return CarsEntity.update(id, body);
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
    return CarsEntity.delete(id);
  }
}
