import { Injectable } from '@nestjs/common';
import { CreateHuespedDto } from './dto/create-huesped.dto';
import { UpdateHuespedDto } from './dto/update-huesped.dto';

@Injectable()
export class HuespedService {
  create(createHuespedDto: CreateHuespedDto) {
    return 'This action adds a new huesped';
  }

  findAll() {
    return `This action returns all huesped`;
  }

  findOne(id: number) {
    return `This action returns a #${id} huesped`;
  }

  update(id: number, updateHuespedDto: UpdateHuespedDto) {
    return `This action updates a #${id} huesped`;
  }

  remove(id: number) {
    return `This action removes a #${id} huesped`;
  }
}
