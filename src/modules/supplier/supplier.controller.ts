import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { RoleType } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { UserEntity } from '../user/user.entity';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  create(@Body() createSupplierDto: CreateSupplierDto, @AuthUser() user: UserEntity) {
    return this.supplierService.create(createSupplierDto,user);
  }

  @Get()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.supplierService.findAll();
  }

  @Get(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.supplierService.findOne(+id);
  }

  @Patch(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto, @AuthUser() user: UserEntity) {
    return this.supplierService.update(+id, updateSupplierDto,user);
  }

  @Delete(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.supplierService.remove(+id);
  }
}
