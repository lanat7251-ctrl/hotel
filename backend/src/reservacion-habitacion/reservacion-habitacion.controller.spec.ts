import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionHabitacionController } from './reservacion-habitacion.controller';
import { ReservacionHabitacionService } from './reservacion-habitacion.service';

describe('ReservacionHabitacionController', () => {
  let controller: ReservacionHabitacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservacionHabitacionController],
      providers: [ReservacionHabitacionService],
    }).compile();

    controller = module.get<ReservacionHabitacionController>(ReservacionHabitacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
