import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Habitacion } from '../../habitacion/entities/habitacion.entity';
import { Amenidad } from '../../amenidades/entities/amenidade.entity';

@Entity('habitacion_amenidades')
export class HabitacionAmenidad {
    //@primarycolumn (sin generated) indica que el valor viene dado por la fk
    @PrimaryColumn({ name: 'id_habitacion' })
    idHabitacion: number;

    @PrimaryColumn({ name: 'id_amenidad' })
    idAmenidad: number;

    //vincula la primera mitad de la llave compuesta con la entidad habitacion
    @ManyToOne(() => Habitacion)
    @JoinColumn({ name: 'id_habitacion' })
    habitacion: Habitacion;

    //vincula la segunda mitad de la llave compuesta... 
    @ManyToOne(() => Amenidad)
    @JoinColumn({ name: 'id_amenidad' })
    amenidad: Amenidad;

}
