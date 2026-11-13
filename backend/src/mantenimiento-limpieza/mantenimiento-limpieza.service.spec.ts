import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientoLimpiezaService } from './mantenimiento-limpieza.service';

describe('MantenimientoLimpiezaService', () => {
  let service: MantenimientoLimpiezaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MantenimientoLimpiezaService],
    }).compile();

    service = module.get<MantenimientoLimpiezaService>(MantenimientoLimpiezaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
