import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateRemarkDto {
    @IsString()
    remark:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
}

