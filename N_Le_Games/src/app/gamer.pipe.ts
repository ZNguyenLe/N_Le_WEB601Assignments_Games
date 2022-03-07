import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'gamer'
})
export class GamerPipe implements PipeTransform {

  transform(gameList: Content[], dType?: string): Content[] {
    return gameList.filter(c => {
      if(dType) {
        return c.type == dType;
      }
      else {
        return !c.type;
      }
    });
  }

}
