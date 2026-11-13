import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientoLimpiezaController } from './mantenimiento-limpieza.controller';
import { MantenimientoLimpiezaService } from './mantenimiento-limpieza.service';

describe('MantenimientoLimpiezaController', () => {
  let controller: MantenimientoLimpiezaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MantenimientoLimpiezaController],
      providers: [MantenimientoLimpiezaService],
    }).compile();

    controller = module.get<MantenimientoLimpiezaController>(MantenimientoLimpiezaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
