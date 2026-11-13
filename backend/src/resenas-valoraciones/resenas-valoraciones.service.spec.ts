import { Test, TestingModule } from '@nestjs/testing';
import { ResenasValoracionesService } from './resenas-valoraciones.service';

describe('ResenasValoracionesService', () => {
  let service: ResenasValoracionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResenasValoracionesService],
    }).compile();

    service = module.get<ResenasValoracionesService>(ResenasValoracionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
