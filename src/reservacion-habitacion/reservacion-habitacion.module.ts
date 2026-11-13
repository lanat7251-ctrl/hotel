import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservacionHabitacionService } from './reservacion-habitacion.service';
import { ReservacionHabitacionController } from './reservacion-habitacion.controller';
import { ReservacionHabitacion } from './entities/reservacion-habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservacionHabitacion])],
  controllers: [ReservacionHabitacionController],
  providers: [ReservacionHabitacionService],
})
export class ReservacionHabitacionModule {}
