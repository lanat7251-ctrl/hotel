import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from
    'typeorm';
import { Reservacion } from '../../reservacion/entities/reservacion.entity';
import { Servicio } from '../../servicios/entities/servicio.entity';

@Entity('reservacion_servicios')
export class ReservacionServicio {
    @PrimaryGeneratedColumn({ name: 'id_res_servicio' })
    idResServicio: number;

    @Column()
    cantidad: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    @Column({
        name: 'fecha_consumo', type: 'timestamp', default: () =>
            'CURRENT_TIMESTAMP'
    })
    fechaConsumo: Date;

    @ManyToOne(() => Reservacion)
    @JoinColumn({ name: 'id_reservacion' })
    reservacion: Reservacion;

    @ManyToOne(() => Servicio)
    @JoinColumn({ name: 'id_servicio' })
    servicio: Servicio;
}