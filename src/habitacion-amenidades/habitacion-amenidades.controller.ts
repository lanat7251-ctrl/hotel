import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitacionAmenidadesService } from './habitacion-amenidades.service';
import { CreateHabitacionAmenidadeDto } from './dto/create-habitacion-amenidade.dto';
import { UpdateHabitacionAmenidadeDto } from './dto/update-habitacion-amenidade.dto';

@Controller('habitacion-amenidades')
export class HabitacionAmenidadesController {
  constructor(private readonly habitacionAmenidadesService: HabitacionAmenidadesService) {}

  @Post()
  create(@Body() createHabitacionAmenidadeDto: CreateHabitacionAmenidadeDto) {
    return this.habitacionAmenidadesService.create(createHabitacionAmenidadeDto);
  }

  @Get()
  findAll() {
    return this.habitacionAmenidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitacionAmenidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitacionAmenidadeDto: UpdateHabitacionAmenidadeDto) {
    return this.habitacionAmenidadesService.update(+id, updateHabitacionAmenidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitacionAmenidadesService.remove(+id);
  }
}
