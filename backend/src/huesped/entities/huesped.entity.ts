import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('huesped')
export class Huesped {
    @PrimaryGeneratedColumn({ name: 'id_huesped' })
    idHuesped: number;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @Column()
    email: string;

    @Column()
    telefono: string;

    @Column({ name: 'documento_identidad' })
    documentoIdentidad: string;
}