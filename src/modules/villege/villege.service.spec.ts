import { Test, TestingModule } from '@nestjs/testing';
import { VillegeService } from './villege.service';

describe('VillegeService', () => {
  let service: VillegeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VillegeService],
    }).compile();

    service = module.get<VillegeService>(VillegeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
