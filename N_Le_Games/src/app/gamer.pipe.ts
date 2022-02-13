import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface'

@Pipe({
  name: 'gamer'
})
export class GamerPipe implements PipeTransform {

  transform(gameList: Content[], ...args: unknown[]): unknown {
    return gameList.filter(g => 
      g.tags != null ? g.tags.length !=0 : false 
      );
  }

}
