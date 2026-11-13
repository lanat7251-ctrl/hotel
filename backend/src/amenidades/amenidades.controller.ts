import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmenidadesService } from './amenidades.service';
import { CreateAmenidadeDto } from './dto/create-amenidade.dto';
import { UpdateAmenidadeDto } from './dto/update-amenidade.dto';

@Controller('amenidades')
export class AmenidadesController {
  constructor(private readonly amenidadesService: AmenidadesService) {}

  @Post()
  create(@Body() createAmenidadeDto: CreateAmenidadeDto) {
    return this.amenidadesService.create(createAmenidadeDto);
  }

  @Get()
  findAll() {
    return this.amenidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amenidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmenidadeDto: UpdateAmenidadeDto) {
    return this.amenidadesService.update(+id, updateAmenidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amenidadesService.remove(+id);
  }
}
