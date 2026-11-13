import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn({ name: 'id_rol' })
    idRol: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;
}