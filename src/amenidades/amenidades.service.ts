import { Injectable } from '@nestjs/common';
import { CreateAmenidadeDto } from './dto/create-amenidade.dto';
import { UpdateAmenidadeDto } from './dto/update-amenidade.dto';

@Injectable()
export class AmenidadesService {
  create(createAmenidadeDto: CreateAmenidadeDto) {
    return 'This action adds a new amenidade';
  }

  findAll() {
    return `This action returns all amenidades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amenidade`;
  }

  update(id: number, updateAmenidadeDto: UpdateAmenidadeDto) {
    return `This action updates a #${id} amenidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} amenidade`;
  }
}
