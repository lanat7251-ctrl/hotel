import { Module } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { HabitacionController } from './habitacion.controller'; import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitacion } from './entities/habitacion.entity';


@Module({
  //Registra la entidad en el modulo para habilitar su repositorio y tabla de sql
  imports: [TypeOrmModule.forFeature([Habitacion])],
  controllers: [HabitacionController],
  providers: [HabitacionService],
})
export class HabitacionModule { }
