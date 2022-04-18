import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { RoleType } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { UserEntity } from '../user/user.entity';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  create(@Body() createVehicleDto: CreateVehicleDto, @AuthUser() user: UserEntity) {
      console.log(user);
    return this.vehicleService.create(createVehicleDto,user);
  }

  @Get()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(+id);
  }

  @Patch(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto, @AuthUser() user: UserEntity) {
    return this.vehicleService.update(+id, updateVehicleDto, user);
  }

  @Delete(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(+id);
  }
}
