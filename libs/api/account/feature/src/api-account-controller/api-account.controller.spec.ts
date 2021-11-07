import { Test, TestingModule } from '@nestjs/testing';
import { ApiAccountController } from './api-account.controller';

describe('ApiAccountControllerController', () => {
  let controller: ApiAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAccountController],
    }).compile();

    controller = module.get<ApiAccountController>(ApiAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
