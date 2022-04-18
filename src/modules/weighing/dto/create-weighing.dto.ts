import { Optional } from "@nestjs/common";
import { IsString,IsNumber } from "class-validator";

export class CreateWeighingDto {
    @IsNumber()
    charges:number;

    @IsString()
    payment_type:string;

    @IsNumber()
    gross_weight:number;

    @IsNumber()
    tare_weight:number;

    @IsNumber()
    net_weight:number;

    @IsNumber()
    vehicle_id:number;

    @IsNumber()
    supplier_id:number;

    @IsNumber()
    material_id:number;

    @IsNumber()
    villege_id:number;

    @IsNumber()
    receiver_id:number;

    @IsNumber()
    remark_id:number;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;

    @Optional()
    @IsString()
    vehicle_number?:string;

    @Optional()
    @IsString()
    supplier_name?:string;

    @Optional()
    @IsString()
    material_name:string;

    @Optional()
    @IsString()
    villege_name:string;

    @Optional()
    @IsString()
    receiver_name:string;

    @Optional()
    @IsString()
    remark_text:string;
}
