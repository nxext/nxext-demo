import { Module } from '@nestjs/common';
import { ApiCoreUtilService } from './api-core-util.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [ApiCoreUtilService],
  exports: [ApiCoreUtilService],
  imports: [ConfigModule],
})
export class ApiCoreDataAccessModule {}
