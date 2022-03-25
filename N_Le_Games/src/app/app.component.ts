
// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { GameServiceService } from './game-service.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root', // app-content-card
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'N_Le_Games';
  lotsofgames: Content[];
  content: Content | undefined;
  messageService: any;
  
  constructor(private gameService: GameServiceService, private messageServices: MessageService) { 
    this.lotsofgames = [];
    // supposedly the promise thing. 
    let ourPromise = new Promise((success , fail) => {
      let pass  = false;
      if (pass) {
        success("Success achieved");
      }
      else {
        fail("poop failuer");
      }
 
    })
    // 
    ourPromise.then(function (successMsg) {
      console.log('promise success with,', successMsg);
    })
    .catch(function (failureMsg) {
      console.log('promise failed with,', failureMsg);
    })
   }
   addGameToList(event: any) {
     this.lotsofgames.push(event);
       this.lotsofgames = [...this.lotsofgames];
      console.log('things get added?', event);
      console.log(this.lotsofgames);
   }
  //  observable: Observable<Content> | undefined;
   ngOnInit(): void {
    
    // an async call using that one arrow thing
    this.gameService.getContentObs().subscribe(GameArray => {
      this.lotsofgames = GameArray
    });
    // another one but works the same. (looked at lecture notes)
    this.gameService.getContentObs().subscribe(GameArray => {
      return this.lotsofgames = GameArray
    });
    this.gameService.getIdContent(2).subscribe((item) => {
      this.content = item;
      this.messageService.add(`${this.content?.id}`);
      
    });
    // this.gameService.getIdContent(2).subscribe(id => this.id == id)

  //  ngOnInit() {
  //    this.observable;
  //  }
}
}