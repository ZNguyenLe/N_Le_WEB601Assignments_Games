
// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ApplicationRef, Component, OnInit } from '@angular/core';
import { concat, first, interval, Observable } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { GameServiceService } from './game-service.service';
import { MessageService } from './message.service';
import { LogUpdateService } from './log-update.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  
  constructor(private gameService: GameServiceService, 
    private messageServices: MessageService, 
    private logService: LogUpdateService,
    private appRef: ApplicationRef,
    private update: SwUpdate,
    // private snackBar: MatSnackBar
    ) { 
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
  //  openSnack(message: string, action: string) {
  //   this.snackBar.open(message, action);
  // }
  //  observable: Observable<Content> | undefined;
  ngOnInit(): void {
    this.logService.init();
    // const stableApp = this.appRef.isStable.pipe(first(isStable => isStable === true));
    // const every1min = interval(6000);
    // const morestable = concat(stableApp, every1min);
    // morestable.subscribe(() => this.update.checkForUpdate());
    //this.getGameFromServer();
  }

  getGameFromServer(): void {
    this.gameService.getContent().subscribe(gameArray => this.lotsofgames = gameArray);
  }
  updatePage(cardName: string): void {
    console.log("showing something", cardName);
    cardName = "something else";
    console.log('after changing something', cardName);

    this.title = "Changed from submit button";
  }
  updateGameInList(contentItem: Content): void {
    this.gameService.updateContent(contentItem).subscribe(() => {
      console.log('Successfully updated Content');
      this.getGameFromServer();
    });
  }
  addGameToList(newGameFromChild: Content): void {
    this.gameService.addContent(newGameFromChild).subscribe(newGameFromServer => {
      console.log("New Server Content: ", newGameFromServer);
      this.lotsofgames.push(newGameFromServer);
      this.lotsofgames = [...this.lotsofgames];
    });
  }
}


// ngOnInit(): void {            ------ assignment 6
    
  // // an async call using that one arrow thing
  // this.gameService.getContentObs().subscribe(GameArray => {
  //   this.lotsofgames = GameArray
  // });
  // // another one but works the same. (looked at lecture notes)
  // this.gameService.getContentObs().subscribe(GameArray => {
  //   return this.lotsofgames = GameArray
  // });
  // this.gameService.getIdContent(2).subscribe((item) => {
  //   this.content = item;
  //   this.messageService.add(`${this.content?.id}`);
    
  // });
  // this.gameService.getIdContent(2).subscribe(id => this.id == id)

//  ngOnInit() {
//    this.observable;
//  }