import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface'

@Pipe({
  name: 'gamer'
})
export class GamerPipe implements PipeTransform {

  transform(gameList: Content[], type?: string): Content[] {
    return gameList.filter((item) => item.type == type);
  }

}
