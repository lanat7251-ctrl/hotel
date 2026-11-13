import { PartialType } from '@nestjs/mapped-types';
import { CreateReservacionHabitacionDto } from './create-reservacion-habitacion.dto';

export class UpdateReservacionHabitacionDto extends PartialType(CreateReservacionHabitacionDto) {}
