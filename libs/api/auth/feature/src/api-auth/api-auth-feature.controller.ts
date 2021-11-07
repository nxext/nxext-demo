import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiAuthDataAccessService } from '@nxext-demo/api/auth/data-access';
import { LocalAuthGuard } from '@nxext-demo/api/auth/util';

@Controller('auth')
export class ApiAuthFeatureController {
  constructor(private readonly service: ApiAuthDataAccessService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request, @Body() { email, password }: { email: string, password: string }) {
    return await this.service.login(email, password);

    //this.service.setCookie(request.cookies, authToken.token);
  }
}
