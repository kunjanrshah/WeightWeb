import { Test, TestingModule } from '@nestjs/testing';
import { VillegeController } from './villege.controller';
import { VillegeService } from './villege.service';

describe('VillegeController', () => {
  let controller: VillegeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VillegeController],
      providers: [VillegeService],
    }).compile();

    controller = module.get<VillegeController>(VillegeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
