import { PartialType } from '@nestjs/mapped-types';
import { CreateMantenimientoLimpiezaDto } from './create-mantenimiento-limpieza.dto';

export class UpdateMantenimientoLimpiezaDto extends PartialType(CreateMantenimientoLimpiezaDto) {}
