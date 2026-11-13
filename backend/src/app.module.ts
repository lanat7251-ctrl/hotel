import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TipoHabitacionModule } from './tipo-habitacion/tipo-habitacion.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { AmenidadesModule } from './amenidades/amenidades.module';
import { HuespedModule } from './huesped/huesped.module';
import { ReservacionModule } from './reservacion/reservacion.module';
import { PagosModule } from './pagos/pagos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { MantenimientoLimpiezaModule } from './mantenimiento-limpieza/mantenimiento-limpieza.module';
import { ResenasValoracionesModule } from './resenas-valoraciones/resenas-valoraciones.module';
import { HabitacionAmenidadesModule } from './habitacion-amenidades/habitacion-amenidades.module';
import { ReservacionHabitacionModule } from './reservacion-habitacion/reservacion-habitacion.module';
import { ReservacionServiciosModule } from './reservacion-servicios/reservacion-servicios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotel_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolesModule,
    UsuariosModule,
    TipoHabitacionModule,
    HabitacionModule,
    AmenidadesModule,
    HuespedModule,
    ReservacionModule,
    PagosModule,
    ServiciosModule,
    MantenimientoLimpiezaModule,
    ResenasValoracionesModule,
    HabitacionAmenidadesModule,
    ReservacionHabitacionModule,
    ReservacionServiciosModule,
  ],
})
export class AppModule { }
