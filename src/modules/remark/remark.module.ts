import { Module } from '@nestjs/common';
import { RemarkService } from './remark.service';
import { RemarkController } from './remark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remark } from './entities/remark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Remark])],
  controllers: [RemarkController],
  providers: [RemarkService],
  exports:[RemarkService]
})
export class RemarkModule {}
