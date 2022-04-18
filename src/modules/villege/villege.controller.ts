import { VillegeService } from './villege.service';
import { CreateVillegeDto } from './dto/create-villege.dto';
import { UpdateVillegeDto } from './dto/update-villege.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { RoleType } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { UserEntity } from '../user/user.entity';

@Controller('villege')
export class VillegeController {
  constructor(private readonly villegeService: VillegeService) {}

  @Post()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  create(@Body() createVillegeDto: CreateVillegeDto, @AuthUser() user: UserEntity) {
    return this.villegeService.create(createVillegeDto,user);
  }

  @Get()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.villegeService.findAll();
  }

  @Get(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.villegeService.findOne(+id);
  }

  @Patch(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateVillegeDto: UpdateVillegeDto, @AuthUser() user: UserEntity) {
    return this.villegeService.update(+id, updateVillegeDto,user);
  }

  @Delete(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.villegeService.remove(+id);
  }
}
