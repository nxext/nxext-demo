import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiAccountDataAccessService } from '@nxext-demo/api/account/data-access';
import { JwtAuthGuard } from '@nxext-demo/api/auth/util';

@Controller('account')
export class ApiAccountController {
  constructor(private accountService: ApiAccountDataAccessService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return this.accountService.getAll();
  }
}
