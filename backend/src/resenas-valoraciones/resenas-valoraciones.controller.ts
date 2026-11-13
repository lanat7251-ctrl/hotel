import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResenasValoracionesService } from './resenas-valoraciones.service';
import { CreateResenasValoracioneDto } from './dto/create-resenas-valoracione.dto';
import { UpdateResenasValoracioneDto } from './dto/update-resenas-valoracione.dto';

@Controller('resenas-valoraciones')
export class ResenasValoracionesController {
  constructor(private readonly resenasValoracionesService: ResenasValoracionesService) {}

  @Post()
  create(@Body() createResenasValoracioneDto: CreateResenasValoracioneDto) {
    return this.resenasValoracionesService.create(createResenasValoracioneDto);
  }

  @Get()
  findAll() {
    return this.resenasValoracionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resenasValoracionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResenasValoracioneDto: UpdateResenasValoracioneDto) {
    return this.resenasValoracionesService.update(+id, updateResenasValoracioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resenasValoracionesService.remove(+id);
  }
}
