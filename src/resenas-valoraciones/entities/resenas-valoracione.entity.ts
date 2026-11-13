import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from
    'typeorm';
import { Huesped } from '../../huesped/entities/huesped.entity';
import { Reservacion } from '../../reservacion/entities/reservacion.entity';

@Entity('resenas_valoraciones')
export class ResenaValoracion {
    @PrimaryGeneratedColumn({ name: 'id_resena' })
    idResena: number;

    @Column()
    calificacion: number; // Escala numérica del 1 al 5

    @Column({ name: 'comentario_publico', type: 'text' })
    comentarioPublico: string;

    @Column({
        name: 'fecha_publicacion', type: 'timestamp', default: () =>
            'CURRENT_TIMESTAMP'
    })
    fechaPublicacion: Date;

    @ManyToOne(() => Huesped)
    @JoinColumn({ name: 'id_huesped' })
    huesped: Huesped;

    @ManyToOne(() => Reservacion)
    @JoinColumn({ name: 'id_reservacion' })
    reservacion: Reservacion;
}