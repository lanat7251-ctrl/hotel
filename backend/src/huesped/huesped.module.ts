import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HuespedService } from './huesped.service';
import { HuespedController } from './huesped.controller';
import { Huesped } from './entities/huesped.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Huesped])],
  controllers: [HuespedController],
  providers: [HuespedService],
})
export class HuespedModule { }
