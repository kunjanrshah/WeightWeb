import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateSettingDto {
    @IsString()
    name:string;

    @IsString()
    value:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
}
