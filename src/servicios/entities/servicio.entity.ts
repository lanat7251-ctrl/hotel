import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('servicios')
export class Servicio {
    @PrimaryGeneratedColumn({ name: 'id_servicio' })
    idServicio: number;

    @Column()
    nombre: string; //spa, lavanderia , etc

    @Column({ name: 'precio_unitario', type: 'decimal', precision: 10, scale: 2 })
    precioUnitario: number;

    @Column({ nullable: true })
    descripcion: string;
}