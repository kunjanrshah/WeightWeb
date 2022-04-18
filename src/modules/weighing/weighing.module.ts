import { Module } from '@nestjs/common';
import { WeighingService } from './weighing.service';
import { WeighingController } from './weighing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weighing } from './entities/weighing.entity';
import { VehicleModule } from '../vehicle/vehicle.module';
import { MaterialModule } from '../material/material.module';
import { SupplierModule } from '../supplier/supplier.module';
import { VillegeModule } from '../villege/villege.module';
import { ReceiverModule } from '../receiver/receiver.module';
import { RemarkModule } from '../remark/remark.module';
import { SettingModule } from '../setting/setting.module';

@Module({
  imports: [TypeOrmModule.forFeature([Weighing]),VehicleModule,MaterialModule,SupplierModule,VillegeModule,ReceiverModule,RemarkModule,SettingModule],
  controllers: [WeighingController],
  providers: [WeighingService]
})
export class WeighingModule {}
