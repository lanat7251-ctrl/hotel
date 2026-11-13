import { Injectable } from '@nestjs/common';
import { CreateReservacionDto } from './dto/create-reservacion.dto';
import { UpdateReservacionDto } from './dto/update-reservacion.dto';

@Injectable()
export class ReservacionService {
  create(createReservacionDto: CreateReservacionDto) {
    return 'This action adds a new reservacion';
  }

  findAll() {
    return `This action returns all reservacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservacion`;
  }

  update(id: number, updateReservacionDto: UpdateReservacionDto) {
    return `This action updates a #${id} reservacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservacion`;
  }
}
