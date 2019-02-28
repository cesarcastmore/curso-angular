import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadLetras'
})
export class CantidadLetrasPipe implements PipeTransform {

  transform(value: string, args?: any): number  {
    return value.split(' ').length;
  }

}
