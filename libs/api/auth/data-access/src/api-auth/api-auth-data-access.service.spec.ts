import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthDataAccessService } from './api-auth-data-access.service';

describe('ApiAuthService', () => {
  let service: ApiAuthDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAuthDataAccessService],
    }).compile();

    service = module.get<ApiAuthDataAccessService>(ApiAuthDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
