import { Injectable } from '@angular/core';
import { LOTSOFGAMES } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }
  
  getContent(): Content[] { // supposedly retrieves content from the content array in contentDb file?
    return LOTSOFGAMES;
  }

  getContentObs(): Observable<Content[]> { // this is the observable way to grab content?
    return of(LOTSOFGAMES);
  }

  getIdContent(id: number): Observable<Content | undefined > {
    const content = this.getContent().find((g) => g.id ==id);
    return of(content);
    //return of(this.getContent().find((y) => y.id === id));
  }
}
