import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from "typeorm";

@Entity("Cars")
export class CarsEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column({update: false})
    vin: string;

  @Column({update: false})
    make: string;

  @Column({update: false})
    model: string;

  @Column({update: false})
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