import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ApiAuthDataAccessService } from '../../api-auth/api-auth-data-access.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: ApiAuthDataAccessService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const user = await this.auth.validateUser(payload.userId);
    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      id: user.id,
      userName: `${user.firstName} ${user.lastName}`
    };
  }
}
