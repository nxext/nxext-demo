import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { ApiAccountDataAccessService } from '@nxext-demo/api/account/data-access';
import { JwtService } from '@nestjs/jwt';
import { validatePassword } from '../lib/utils/api-auth-data-access.utils';
import { Response } from 'express';
import { ApiCoreUtilService } from '@nxext-demo/api/core/data-access';

@Injectable()
export class ApiAuthDataAccessService {
  constructor(
    private readonly accounts: ApiAccountDataAccessService,
    private readonly core: ApiCoreUtilService,
    private readonly jwtService: JwtService
  ) {}

  validateUser(userId: string) {
    return this.accounts.findUserById(userId);
  }

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async login(email: string, password: string) {
    const user = await this.accounts.findUserByEmail(email);

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    if (!user?.password) {
      throw new NotFoundException(`Can't log in with email: ${email}`);
    }

    const passwordValid = validatePassword(password, user.password);

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    return { access_token: this.generateJwt({ userId: user?.id }) };
  }

  getUserFromToken(token: string) {
    const userId = this.jwtService.decode(token)['userId'];

    return this.accounts.findUserById(userId);
  }

  setCookie(res: Response, token: string) {
    return res?.cookie(this.core.cookie.name, token, this.core.cookie.options);
  }

  clearCookie(res: Response) {
    return res.clearCookie(this.core.cookie.name, this.core.cookie.options);
  }
}
