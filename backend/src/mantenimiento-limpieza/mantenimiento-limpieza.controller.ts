import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MantenimientoLimpiezaService } from './mantenimiento-limpieza.service';
import { CreateMantenimientoLimpiezaDto } from './dto/create-mantenimiento-limpieza.dto';
import { UpdateMantenimientoLimpiezaDto } from './dto/update-mantenimiento-limpieza.dto';

@Controller('mantenimiento-limpieza')
export class MantenimientoLimpiezaController {
  constructor(private readonly mantenimientoLimpiezaService: MantenimientoLimpiezaService) {}

  @Post()
  create(@Body() createMantenimientoLimpiezaDto: CreateMantenimientoLimpiezaDto) {
    return this.mantenimientoLimpiezaService.create(createMantenimientoLimpiezaDto);
  }

  @Get()
  findAll() {
    return this.mantenimientoLimpiezaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mantenimientoLimpiezaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMantenimientoLimpiezaDto: UpdateMantenimientoLimpiezaDto) {
    return this.mantenimientoLimpiezaService.update(+id, updateMantenimientoLimpiezaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mantenimientoLimpiezaService.remove(+id);
  }
}
