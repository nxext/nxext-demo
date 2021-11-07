import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { validatePassword } from '../utils/api-auth-data-access.utils';
import { ApiAuthDataAccessService } from '../../api-auth/api-auth-data-access.service';
import { ApiAccountDataAccessService } from '@nxext-demo/api/account/data-access';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: ApiAuthDataAccessService,
    private readonly accounts: ApiAccountDataAccessService
  ) {
    super({usernameField: 'email'});
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.accounts.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const passwordValid = validatePassword(password, user.password);

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }
    return user;
  }
}
