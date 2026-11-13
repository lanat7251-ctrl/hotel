import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionServiciosService } from './reservacion-servicios.service';

describe('ReservacionServiciosService', () => {
  let service: ReservacionServiciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservacionServiciosService],
    }).compile();

    service = module.get<ReservacionServiciosService>(ReservacionServiciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
