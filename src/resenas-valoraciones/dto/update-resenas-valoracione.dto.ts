import { PartialType } from '@nestjs/mapped-types';
import { CreateResenasValoracioneDto } from './create-resenas-valoracione.dto';

export class UpdateResenasValoracioneDto extends PartialType(CreateResenasValoracioneDto) {}
