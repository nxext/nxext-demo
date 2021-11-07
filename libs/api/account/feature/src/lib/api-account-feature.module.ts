import { Module } from '@nestjs/common';
import { ApiAccountDataAccessModule } from '@nxext-demo/api/account/data-access';
import { ApiAccountController } from '../api-account-controller/api-account.controller';

@Module({
  controllers: [ApiAccountController],
  imports: [ApiAccountDataAccessModule],
})
export class ApiAccountFeatureModule {}
