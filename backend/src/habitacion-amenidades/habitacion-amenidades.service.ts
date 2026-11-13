import { Injectable } from '@nestjs/common';
import { CreateHabitacionAmenidadeDto } from './dto/create-habitacion-amenidade.dto';
import { UpdateHabitacionAmenidadeDto } from './dto/update-habitacion-amenidade.dto';

@Injectable()
export class HabitacionAmenidadesService {
  create(createHabitacionAmenidadeDto: CreateHabitacionAmenidadeDto) {
    return 'This action adds a new habitacionAmenidade';
  }

  findAll() {
    return `This action returns all habitacionAmenidades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitacionAmenidade`;
  }

  update(id: number, updateHabitacionAmenidadeDto: UpdateHabitacionAmenidadeDto) {
    return `This action updates a #${id} habitacionAmenidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitacionAmenidade`;
  }
}
