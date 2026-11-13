import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Habitacion } from "../../habitacion/entities/habitacion.entity";
import { Reservacion } from "../../reservacion/entities/reservacion.entity";

@Entity('reservacion_habitacion')
export class ReservacionHabitacion {
    @PrimaryGeneratedColumn({ name: 'id_res_hab' })
    idResHab: number;
    // guarda la tarifa pactada por noche, aunque el prexio del cuarto cambie en el futuro
    @Column({ name: 'precio_noche_aplicado', type: 'decimal', precision: 10, scale: 2 })
    precioNocheAplicado: number;

    @ManyToOne(() => Reservacion)
    @JoinColumn({ name: 'id_reservacion' })
    reservacion: Reservacion;

    @ManyToOne(() => Habitacion)
    @JoinColumn({ name: 'id_habitacion' })
    habitacion: Habitacion;
}