import { Test, TestingModule } from '@nestjs/testing';
import { ApiAccountDataAccessService } from './api-account-data-access.service';

describe('ApiAccountDataAccessServiceService', () => {
  let service: ApiAccountDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAccountDataAccessService],
    }).compile();

    service = module.get<ApiAccountDataAccessService>(
      ApiAccountDataAccessService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
