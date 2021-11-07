import { Module } from '@nestjs/common';
import { ApiAccountDataAccessModule } from '@nxext-demo/api/account/data-access';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { ApiAuthDataAccessService } from '../api-auth/api-auth-data-access.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApiCoreDataAccessModule } from '@nxext-demo/api/core/data-access';
import { ApiAuthUtilModule } from '@nxext-demo/api/auth/util';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    ApiCoreDataAccessModule,
    ApiAccountDataAccessModule,
    ApiAuthUtilModule
  ],
  providers: [ApiAuthDataAccessService, LocalStrategy, JwtStrategy],
  exports: [ApiAuthDataAccessService, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class ApiAuthDataAccessModule {}
