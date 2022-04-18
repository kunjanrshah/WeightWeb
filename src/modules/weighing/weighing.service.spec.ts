import { Test, TestingModule } from '@nestjs/testing';
import { WeighingService } from './weighing.service';

describe('WeighingService', () => {
  let service: WeighingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeighingService],
    }).compile();

    service = module.get<WeighingService>(WeighingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
