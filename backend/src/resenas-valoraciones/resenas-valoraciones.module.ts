import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResenasValoracionesService } from './resenas-valoraciones.service';
import { ResenasValoracionesController } from './resenas-valoraciones.controller';
import { ResenaValoracion } from './entities/resenas-valoracione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResenaValoracion])],
  controllers: [ResenasValoracionesController],
  providers: [ResenasValoracionesService],
})
export class ResenasValoracionesModule {}
