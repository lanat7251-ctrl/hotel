import { Injectable } from '@nestjs/common';
import { CreateReservacionServicioDto } from './dto/create-reservacion-servicio.dto';
import { UpdateReservacionServicioDto } from './dto/update-reservacion-servicio.dto';

@Injectable()
export class ReservacionServiciosService {
  create(createReservacionServicioDto: CreateReservacionServicioDto) {
    return 'This action adds a new reservacionServicio';
  }

  findAll() {
    return `This action returns all reservacionServicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservacionServicio`;
  }

  update(id: number, updateReservacionServicioDto: UpdateReservacionServicioDto) {
    return `This action updates a #${id} reservacionServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservacionServicio`;
  }
}
