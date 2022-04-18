import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { RoleType } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { UserEntity } from '../user/user.entity';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  create(@Body() createMaterialDto: CreateMaterialDto, @AuthUser() user: UserEntity) {
    return this.materialService.create(createMaterialDto,user);
  }

  @Get()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.materialService.findAll();
  }

  @Get(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.materialService.findOne(+id);
  }

  @Patch(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateMaterialDto: UpdateMaterialDto, @AuthUser() user: UserEntity) {
    return this.materialService.update(+id, updateMaterialDto,user);
  }

  @Delete(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.materialService.remove(+id);
  }
}
