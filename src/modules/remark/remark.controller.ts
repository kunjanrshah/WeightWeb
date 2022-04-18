import { RemarkService } from './remark.service';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { RoleType } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { UserEntity } from '../user/user.entity';

@Controller('remark')
export class RemarkController {
  constructor(private readonly remarkService: RemarkService) {}

  @Post()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  create(@Body() createRemarkDto: CreateRemarkDto, @AuthUser() user: UserEntity) {
    return this.remarkService.create(createRemarkDto,user);
  }

  @Get()
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.remarkService.findAll();
  }

  @Get(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.remarkService.findOne(+id);
  }

  @Patch(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateRemarkDto: UpdateRemarkDto, @AuthUser() user: UserEntity) {
    return this.remarkService.update(+id, updateRemarkDto,user);
  }

  @Delete(':id')
  @Auth([RoleType.USER,RoleType.ADMIN])
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.remarkService.remove(+id);
  }
}
