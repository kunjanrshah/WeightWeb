import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateVillegeDto {
    @IsString()
    villege_name:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
}

