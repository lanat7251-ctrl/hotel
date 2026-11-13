import { Test, TestingModule } from '@nestjs/testing';
import { AmenidadesService } from './amenidades.service';

describe('AmenidadesService', () => {
  let service: AmenidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmenidadesService],
    }).compile();

    service = module.get<AmenidadesService>(AmenidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
