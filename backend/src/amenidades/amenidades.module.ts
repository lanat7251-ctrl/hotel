import { Module } from '@nestjs/common';
import { AmenidadesService } from './amenidades.service';
import { AmenidadesController } from './amenidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenidad } from './entities/amenidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Amenidad])],
  controllers: [AmenidadesController],
  providers: [AmenidadesService],
})
export class AmenidadesModule { }
