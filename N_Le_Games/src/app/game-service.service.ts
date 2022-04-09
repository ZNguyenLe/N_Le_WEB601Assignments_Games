import { Injectable } from '@angular/core';
import { LOTSOFGAMES } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

// ---------------previous Assignment
  constructor(private messageService: MessageService, private http: HttpClient) { }
  
  getContent(): Observable<Content[]> { // supposedly retrieves content from the content array in contentDb file?
  this.messageService.add("Content Array Loaded");  
  return of(LOTSOFGAMES);
  }

  // getIdContent(id: number): Observable<Content> {
  // let filteredGameList: Content[] = content.filter(gameItem => gameItem.id === id);
  // if(filteredGameList.length) {
  // this.messageService.add(`Content with id: ${id}`);
  // return of(filteredGameList[0]);
  // }
  // else {
  // this.messageService.add("Invalid id number");
  // return of({
  // id: -1,
  // title: "invalid id",
  // description: "n/a",
  // creator: "no one"
  //  });
  // }
  // }
// ----------------


  getContent2(): Observable<Content[]> {
    console.log('Retrieving List');
    return this.http.get<Content[]>("api/game");
  }
  getContent3(id: number): Observable<Content> {
    console.log('Retrieving List');
    return this.http.get<Content>("api/game" + id);
  }
  addContent(newGameItem: Content): Observable<Content> {
    console.log("Adding new Game: ", newGameItem);
    return this.http.post<Content>("api/game", newGameItem, this.httpOptions);
  }

  updateContent(gameItem: Content): Observable<any> {
    return this.http.put("api/game", gameItem, this.httpOptions);
  }
}
