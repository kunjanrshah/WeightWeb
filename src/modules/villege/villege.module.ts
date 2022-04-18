import { Module } from '@nestjs/common';
import { VillegeService } from './villege.service';
import { VillegeController } from './villege.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Villege } from './entities/villege.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Villege])],
  controllers: [VillegeController],
  providers: [VillegeService],
  exports:[VillegeService]
})
export class VillegeModule {}
