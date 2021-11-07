import { Module } from '@nestjs/common';
import { ApiAuthFeatureModule } from '@nxext-demo/api/auth/feature';
import { ApiAccountFeatureModule } from '@nxext-demo/api/account/feature';

@Module({
  imports: [ApiAuthFeatureModule, ApiAccountFeatureModule],
})
export class AppModule {}
