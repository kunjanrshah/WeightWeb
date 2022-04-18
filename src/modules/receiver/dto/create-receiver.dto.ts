import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateReceiverDto {
    @IsString()
    receiver_name:string;

    @Optional()
    createdAt:string;

    @Optional()
    updatedAt:string;
}
