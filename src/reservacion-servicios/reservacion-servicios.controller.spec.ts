import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionServiciosController } from './reservacion-servicios.controller';
import { ReservacionServiciosService } from './reservacion-servicios.service';

describe('ReservacionServiciosController', () => {
  let controller: ReservacionServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservacionServiciosController],
      providers: [ReservacionServiciosService],
    }).compile();

    controller = module.get<ReservacionServiciosController>(ReservacionServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
