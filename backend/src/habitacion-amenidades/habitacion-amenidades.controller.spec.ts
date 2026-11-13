import { Test, TestingModule } from '@nestjs/testing';
import { HabitacionAmenidadesController } from './habitacion-amenidades.controller';
import { HabitacionAmenidadesService } from './habitacion-amenidades.service';

describe('HabitacionAmenidadesController', () => {
  let controller: HabitacionAmenidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitacionAmenidadesController],
      providers: [HabitacionAmenidadesService],
    }).compile();

    controller = module.get<HabitacionAmenidadesController>(HabitacionAmenidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
