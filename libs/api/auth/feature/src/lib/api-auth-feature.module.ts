import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ApiAuthFeatureController } from '../api-auth/api-auth-feature.controller';
import { JwtModule } from '@nestjs/jwt';
import { ApiAuthDataAccessModule } from '@nxext-demo/api/auth/data-access';

@Module({
  controllers: [ApiAuthFeatureController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' }
    }),
    ApiAuthDataAccessModule
  ],
})
export class ApiAuthFeatureModule {}
