import { PartialType } from '@nestjs/mapped-types';
import { CreateReservacionServicioDto } from './create-reservacion-servicio.dto';

export class UpdateReservacionServicioDto extends PartialType(CreateReservacionServicioDto) {}
