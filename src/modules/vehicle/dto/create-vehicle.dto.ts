import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateVehicleDto {
    @IsString()
    vehicle_number:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
    
}
