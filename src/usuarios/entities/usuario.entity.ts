import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "../../roles/entities/role.entity";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ name: 'nombre_completo' })
    nombreCompleto: string;

    @Column({ unique: true })
    email: string;

    @Column({ name: 'password_hash' })
    passwordHash: string;

    @Column({ name: 'estado_activo', default: true })
    estadoActivo: boolean;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'id_rol' })
    rol: Role;





}