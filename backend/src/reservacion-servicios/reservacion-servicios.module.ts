import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservacionServiciosService } from './reservacion-servicios.service';
import { ReservacionServiciosController } from './reservacion-servicios.controller';
import { ReservacionServicio } from './entities/reservacion-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservacionServicio])],
  controllers: [ReservacionServiciosController],
  providers: [ReservacionServiciosService],
})
export class ReservacionServiciosModule {}
