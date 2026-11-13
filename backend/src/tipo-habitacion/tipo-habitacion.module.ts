import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoHabitacionService } from './tipo-habitacion.service';
import { TipoHabitacionController } from './tipo-habitacion.controller';
import { TipoHabitacion } from './entities/tipo-habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoHabitacion])],
  controllers: [TipoHabitacionController],
  providers: [TipoHabitacionService],
})
export class TipoHabitacionModule {}
