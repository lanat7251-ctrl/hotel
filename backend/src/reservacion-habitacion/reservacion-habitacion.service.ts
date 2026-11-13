import { Injectable } from '@nestjs/common';
import { CreateReservacionHabitacionDto } from './dto/create-reservacion-habitacion.dto';
import { UpdateReservacionHabitacionDto } from './dto/update-reservacion-habitacion.dto';

@Injectable()
export class ReservacionHabitacionService {
  create(createReservacionHabitacionDto: CreateReservacionHabitacionDto) {
    return 'This action adds a new reservacionHabitacion';
  }

  findAll() {
    return `This action returns all reservacionHabitacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservacionHabitacion`;
  }

  update(id: number, updateReservacionHabitacionDto: UpdateReservacionHabitacionDto) {
    return `This action updates a #${id} reservacionHabitacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservacionHabitacion`;
  }
}
