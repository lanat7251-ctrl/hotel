import { Injectable } from '@nestjs/common';
import { CreateResenasValoracioneDto } from './dto/create-resenas-valoracione.dto';
import { UpdateResenasValoracioneDto } from './dto/update-resenas-valoracione.dto';

@Injectable()
export class ResenasValoracionesService {
  create(createResenasValoracioneDto: CreateResenasValoracioneDto) {
    return 'This action adds a new resenasValoracione';
  }

  findAll() {
    return `This action returns all resenasValoraciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resenasValoracione`;
  }

  update(id: number, updateResenasValoracioneDto: UpdateResenasValoracioneDto) {
    return `This action updates a #${id} resenasValoracione`;
  }

  remove(id: number) {
    return `This action removes a #${id} resenasValoracione`;
  }
}
