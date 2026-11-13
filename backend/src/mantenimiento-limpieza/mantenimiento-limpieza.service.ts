import { Injectable } from '@nestjs/common';
import { CreateMantenimientoLimpiezaDto } from './dto/create-mantenimiento-limpieza.dto';
import { UpdateMantenimientoLimpiezaDto } from './dto/update-mantenimiento-limpieza.dto';

@Injectable()
export class MantenimientoLimpiezaService {
  create(createMantenimientoLimpiezaDto: CreateMantenimientoLimpiezaDto) {
    return 'This action adds a new mantenimientoLimpieza';
  }

  findAll() {
    return `This action returns all mantenimientoLimpieza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mantenimientoLimpieza`;
  }

  update(id: number, updateMantenimientoLimpiezaDto: UpdateMantenimientoLimpiezaDto) {
    return `This action updates a #${id} mantenimientoLimpieza`;
  }

  remove(id: number) {
    return `This action removes a #${id} mantenimientoLimpieza`;
  }
}
