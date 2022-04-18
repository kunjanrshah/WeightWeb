import './boilerplate.polyfill';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import path from 'path';

import { AuthModule } from './modules/auth/auth.module';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { SharedModule } from './shared/shared.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { VillegeModule } from './modules/villege/villege.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { ReceiverModule } from './modules/receiver/receiver.module';
import { MaterialModule } from './modules/material/material.module';
import { RemarkModule } from './modules/remark/remark.module';
import { WeighingModule } from './modules/weighing/weighing.module';
import { SettingModule } from './modules/setting/setting.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.postgresConfig,
      inject: [ApiConfigService],
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ApiConfigService) => ({
        fallbackLanguage: configService.fallbackLanguage,
        parserOptions: {
          path: path.join(__dirname, '/i18n/'),
          watch: configService.isDevelopment,
        },
      }),
      imports: [SharedModule],
      parser: I18nJsonParser,
      inject: [ApiConfigService],
    }),
    HealthCheckerModule,
    VehicleModule,
    VillegeModule,
    SupplierModule,
    ReceiverModule,
    MaterialModule,
    RemarkModule,
    WeighingModule,
    SettingModule
  ],
})
export class AppModule {}
