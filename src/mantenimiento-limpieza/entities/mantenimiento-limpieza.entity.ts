import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from
    'typeorm';
import { Habitacion } from '../../habitacion/entities/habitacion.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('mantenimiento_limpieza')
export class MantenimientoLimpieza {
    @PrimaryGeneratedColumn({ name: 'id_mantenimiento' })
    idMantenimiento: number;

    @Column()
    tarea: string; // 'Limpieza', 'Reparación'

    @Column()
    descripcion: string;

    @Column({
        name: 'fecha_reporte', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    fechaReporte: Date;

    @Column({ default: 'Pendiente' })
    estado: string;

    @ManyToOne(() => Habitacion)
    @JoinColumn({ name: 'id_habitacion' })
    habitacion: Habitacion;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
}// 'Pendiente', 'Resuelto'// Miembro del staff asignado a resolver el reporte