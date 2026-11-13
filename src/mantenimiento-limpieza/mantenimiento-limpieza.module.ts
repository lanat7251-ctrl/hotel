import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MantenimientoLimpiezaService } from './mantenimiento-limpieza.service';
import { MantenimientoLimpiezaController } from './mantenimiento-limpieza.controller';
import { MantenimientoLimpieza } from './entities/mantenimiento-limpieza.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MantenimientoLimpieza])],
  controllers: [MantenimientoLimpiezaController],
  providers: [MantenimientoLimpiezaService],
})
export class MantenimientoLimpiezaModule { }
