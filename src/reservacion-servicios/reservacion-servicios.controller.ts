import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservacionServiciosService } from './reservacion-servicios.service';
import { CreateReservacionServicioDto } from './dto/create-reservacion-servicio.dto';
import { UpdateReservacionServicioDto } from './dto/update-reservacion-servicio.dto';

@Controller('reservacion-servicios')
export class ReservacionServiciosController {
  constructor(private readonly reservacionServiciosService: ReservacionServiciosService) {}

  @Post()
  create(@Body() createReservacionServicioDto: CreateReservacionServicioDto) {
    return this.reservacionServiciosService.create(createReservacionServicioDto);
  }

  @Get()
  findAll() {
    return this.reservacionServiciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservacionServiciosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservacionServicioDto: UpdateReservacionServicioDto) {
    return this.reservacionServiciosService.update(+id, updateReservacionServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservacionServiciosService.remove(+id);
  }
}
