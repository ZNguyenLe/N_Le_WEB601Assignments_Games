import { Injectable } from '@angular/core';
import { LOTSOFGAMES } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private messageService: MessageService) { }
  
  getContent(): Content[] { // supposedly retrieves content from the content array in contentDb file?
    return LOTSOFGAMES;
  }

  getContentObs(): Observable<Content[]> { // this is the observable way to grab content?
    const games = of(LOTSOFGAMES);
    this.messageService.add('Content array loaded');
    return games;
    
  }

  getIdContent(id: number) {
    const content = this.getContent().find((g) => g.id == id);
    this.messageService.add(`ID: tried getting ID of ${id}`);
    return of(content);
    //return of(this.getContent().find((y) => y.id === id));
  }
}
