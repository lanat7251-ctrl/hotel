import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Huesped } from "../../huesped/entities/huesped.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity('reservacion')
export class Reservacion {
    @PrimaryGeneratedColumn({ name: 'id_reservacion' })
    idReservacion: number;

    @Column({ name: 'fecha_checkin', type: 'date' })
    fechaCheckin: string;

    @Column({ name: 'fecha_checkout', type: 'date' })
    fechaCheckout: string;

    @Column({ default: 'Activa' })
    estado: string;

    @Column({ name: 'total_estimado', type: 'decimal', precision: 10, scale: 2 })
    totalEstimado: number;

    @ManyToOne(() => Huesped)
    @JoinColumn({ name: 'id_huesped' })
    huesped: Huesped;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

}