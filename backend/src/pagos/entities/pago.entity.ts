import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Reservacion } from "../../reservacion/entities/reservacion.entity";

@Entity('pagos')
export class Pago {
    @PrimaryGeneratedColumn({ name: 'id_pago' })
    idPago: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monto: number;

    @Column({ name: 'metodo_pago' })
    metodoPago: string;

    @Column({ name: 'fecha_pago', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaPago: Date;

    @Column({ name: 'estado_pago', default: 'Completado' })
    estadoPago: string;

    @ManyToOne(() => Reservacion)
    @JoinColumn({ name: 'id_reservacion' })
    reservacion: Reservacion;
}
