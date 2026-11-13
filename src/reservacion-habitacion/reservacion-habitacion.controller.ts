import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservacionHabitacionService } from './reservacion-habitacion.service';
import { CreateReservacionHabitacionDto } from './dto/create-reservacion-habitacion.dto';
import { UpdateReservacionHabitacionDto } from './dto/update-reservacion-habitacion.dto';

@Controller('reservacion-habitacion')
export class ReservacionHabitacionController {
  constructor(private readonly reservacionHabitacionService: ReservacionHabitacionService) {}

  @Post()
  create(@Body() createReservacionHabitacionDto: CreateReservacionHabitacionDto) {
    return this.reservacionHabitacionService.create(createReservacionHabitacionDto);
  }

  @Get()
  findAll() {
    return this.reservacionHabitacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservacionHabitacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservacionHabitacionDto: UpdateReservacionHabitacionDto) {
    return this.reservacionHabitacionService.update(+id, updateReservacionHabitacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservacionHabitacionService.remove(+id);
  }
}
