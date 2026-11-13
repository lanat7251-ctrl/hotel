import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionHabitacionService } from './reservacion-habitacion.service';

describe('ReservacionHabitacionService', () => {
  let service: ReservacionHabitacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservacionHabitacionService],
    }).compile();

    service = module.get<ReservacionHabitacionService>(ReservacionHabitacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
