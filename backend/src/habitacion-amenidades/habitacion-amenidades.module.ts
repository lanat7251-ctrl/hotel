import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitacionAmenidadesService } from './habitacion-amenidades.service';
import { HabitacionAmenidadesController } from './habitacion-amenidades.controller';
import { HabitacionAmenidad } from './entities/habitacion-amenidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HabitacionAmenidad])],
  controllers: [HabitacionAmenidadesController],
  providers: [HabitacionAmenidadesService],
})
export class HabitacionAmenidadesModule { }
