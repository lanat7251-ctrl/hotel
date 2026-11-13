import { Test, TestingModule } from '@nestjs/testing';
import { AmenidadesController } from './amenidades.controller';
import { AmenidadesService } from './amenidades.service';

describe('AmenidadesController', () => {
  let controller: AmenidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmenidadesController],
      providers: [AmenidadesService],
    }).compile();

    controller = module.get<AmenidadesController>(AmenidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
