import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EstadoPipe'
})
export class EstadoPipe implements PipeTransform {

  transform(value: string | undefined): string {
    /*Type 'undefined' is not assignable to type 'string'.
      Error de compilación ya que se permite que el estado de la tarea sea undefined, pero el pipe taskEstado espera un string.
      Solución: cambiar la definición del parámetro value para que acepte string o undefined.
    */
    if (value === 'pendiente') {
      return '🕓 Pendiente';
    }
    if (value === 'completada') {
      return '✅ Completada';
    }

    return '❓ Desconocido';
  }

}
