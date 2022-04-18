import { PartialType } from '@nestjs/mapped-types';
import { CreateVillegeDto } from './create-villege.dto';

export class UpdateVillegeDto extends PartialType(CreateVillegeDto) {}
