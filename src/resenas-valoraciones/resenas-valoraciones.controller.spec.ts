import { Test, TestingModule } from '@nestjs/testing';
import { ResenasValoracionesController } from './resenas-valoraciones.controller';
import { ResenasValoracionesService } from './resenas-valoraciones.service';

describe('ResenasValoracionesController', () => {
  let controller: ResenasValoracionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResenasValoracionesController],
      providers: [ResenasValoracionesService],
    }).compile();

    controller = module.get<ResenasValoracionesController>(ResenasValoracionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
