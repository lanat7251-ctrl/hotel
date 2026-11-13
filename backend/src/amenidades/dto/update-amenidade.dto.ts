import { PartialType } from '@nestjs/mapped-types';
import { CreateAmenidadeDto } from './create-amenidade.dto';

export class UpdateAmenidadeDto extends PartialType(CreateAmenidadeDto) {}
