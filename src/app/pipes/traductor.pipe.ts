import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  transform(value: string, trad?: string): string {

  	if(trad == 'USD' ){
  		return 'title';
  	} else if(trad == 'SPA' ){
  		return 'titulo';
  	}

  	return value;
 
  }

}
