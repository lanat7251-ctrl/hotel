import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { TipoHabitacion } from "../../tipo-habitacion/entities/tipo-habitacion.entity";

@Entity('habitacion')
export class Habitacion {
    @PrimaryGeneratedColumn({ name: 'id_habitacion' })
    idHabitacion: number;

    @Column({ name: 'numero_cuarto' })
    numeroCuarto: number;

    @Column()
    piso: number;

    @Column({ default: 'Disponible' })
    estado: string;// estados validos: 'disponible,' ocupada, 'mantenimiento'

    @ManyToOne(() => TipoHabitacion)
    @JoinColumn({ name: 'id_tipo' })//crea la fk id_tipo en la tabla habitacion
    tipoHabitacion: TipoHabitacion;
}
