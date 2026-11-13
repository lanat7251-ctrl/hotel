import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitacionAmenidadeDto } from './create-habitacion-amenidade.dto';

export class UpdateHabitacionAmenidadeDto extends PartialType(CreateHabitacionAmenidadeDto) {}
