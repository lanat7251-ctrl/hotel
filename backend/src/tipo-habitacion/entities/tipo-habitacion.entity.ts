import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_habitacion')
export class TipoHabitacion {
    @PrimaryGeneratedColumn({ name: 'id_tipo' })
    idTipo: number;

    @Column()
    nombre: string;

    @Column({ name: 'capacidad_maxima' })
    capacidadMaxima: number;

    @Column({ name: 'precio_base', type: 'decimal', precision: 10, scale: 2 })
    precioBase: number;
}