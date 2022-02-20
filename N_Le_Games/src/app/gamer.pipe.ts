import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface'

@Pipe({
  name: 'gamer'
})
export class GamerPipe implements PipeTransform {

  transform(gameList: Content, dType?: string): string {
    return gameList.type ?? dType ?? "something";
   // return gameList.filter(f => f.type != null ? f.type.length != 0 : false
      
  }

}
