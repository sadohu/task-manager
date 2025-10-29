export interface TaskModel {

    /*  Un título (string)
    *   Una descripción (string)
    *   Un estado: "pendiente" o "completada" (string)
    */

    titulo?: string;
    descripcion?: string;
    estado?: 'pendiente' | 'completada';
}