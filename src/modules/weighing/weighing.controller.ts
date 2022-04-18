import { WeighingService } from './weighing.service';
import { CreateWeighingDto } from './dto/create-weighing.dto';
import { UpdateWeighingDto } from './dto/update-weighing.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Query } from '@nestjs/common';
import { RoleType } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { UserEntity } from '../user/user.entity';
@Controller('weighing')
export class WeighingController {
  constructor(private readonly weighingService: WeighingService) {}

  @Post()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  create(@Body() createWeighingDto: CreateWeighingDto, @AuthUser() user: UserEntity) {
    return this.weighingService.create(createWeighingDto,user);
  }

  @Get()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findAll(@Query() queryParams) {
      console.log(queryParams);
    return this.weighingService.findAll(queryParams);
  }

  @Get('getNextId')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findNextId() {
    return this.weighingService.getNextId();
  }

  @Delete('deleteAllById')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  deleteAllById(@Body() deleteIds) {
      console.log(deleteIds);
    return this.weighingService.deleteAllById(deleteIds.deleteids);
  }
  

  @Get(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.weighingService.findOne(+id);
  }

  @Patch(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateWeighingDto: UpdateWeighingDto, @AuthUser() user: UserEntity) {
    return this.weighingService.update(+id, updateWeighingDto,user);
  }

  @Delete(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.weighingService.remove(+id);
  }

}
