import { Test, TestingModule } from '@nestjs/testing';
import { HabitacionAmenidadesService } from './habitacion-amenidades.service';

describe('HabitacionAmenidadesService', () => {
  let service: HabitacionAmenidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitacionAmenidadesService],
    }).compile();

    service = module.get<HabitacionAmenidadesService>(HabitacionAmenidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
