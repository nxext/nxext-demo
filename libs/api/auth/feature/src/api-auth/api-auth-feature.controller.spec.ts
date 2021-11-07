import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthFeatureController } from './api-auth-feature.controller';

describe('ApiAuthController', () => {
  let controller: ApiAuthFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAuthFeatureController],
    }).compile();

    controller = module.get<ApiAuthFeatureController>(ApiAuthFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
