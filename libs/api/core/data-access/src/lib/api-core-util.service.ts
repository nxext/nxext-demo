import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CookieOptions } from 'express';

@Injectable()
export class ApiCoreUtilService {
  constructor(public readonly config: ConfigService) {}

  get cookie(): { name: string; options: CookieOptions } {
    return this.config.get('api.cookie');
  }
}
