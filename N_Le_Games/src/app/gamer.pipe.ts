import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gamer'
})
export class GamerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
