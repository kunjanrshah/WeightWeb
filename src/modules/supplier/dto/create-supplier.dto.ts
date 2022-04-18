import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateSupplierDto {
    @IsString()
    supplier_name:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
}

