import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('amenidades')
export class Amenidad {
    @PrimaryGeneratedColumn({ name: 'id_amenidad' })
    idAmenidad: number;

    @Column()
    nombre: string;// caracteristicas de las amenidades

    @Column({ nullable: true })
    descripcion: string;

}