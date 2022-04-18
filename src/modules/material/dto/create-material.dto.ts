import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateMaterialDto {
    @IsString()
    material_name:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
}

