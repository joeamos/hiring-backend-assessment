import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from "typeorm";

@Entity("Cars")
export class CarsEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
    vin: string;

  @Column()
    make: string;

  @Column()
    model: string;

  @Column()
    year: number;

  @Column()
    licensePlateNum: string;

  @Column()
    registrationNum: string;

  @Column()
    registrationState: string;

  @Column()
    registrationExpiration: string;

  @Column()
    registrationName: string;

  @Column()
    currentValue: number;

  @Column()
    currentMileage: number;

  @Column()
    description: string;

  @Column()
    color: string;
}