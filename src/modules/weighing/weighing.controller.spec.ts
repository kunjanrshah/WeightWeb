import { Test, TestingModule } from '@nestjs/testing';
import { WeighingController } from './weighing.controller';
import { WeighingService } from './weighing.service';

describe('WeighingController', () => {
  let controller: WeighingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeighingController],
      providers: [WeighingService],
    }).compile();

    controller = module.get<WeighingController>(WeighingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
