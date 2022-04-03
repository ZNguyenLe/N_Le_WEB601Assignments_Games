import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;

  gameList: Content[];

     constructor(private gameService: GameServiceService) {
       this.gameList = [];
     }

     ngOnInit(): void {
      this.gameService.getContent().subscribe(list => {
        this.gameList = list;
      })
    }
  
  addGameToList($newGameFromChild: any) {
    this.gameList.push($newGameFromChild);
      this.gameList = [...this.gameList];
     console.log('things get added?', $newGameFromChild);
     console.log(this.gameList);
  }

  getGameFromServer(): void {
    this.gameService.getContent().subscribe(gameArray => this.gameList = gameArray);
  }
  updateGameInList(contentItem: Content): void {
    this.gameService.updateContent(contentItem).subscribe(() => {
      console.log('Successfully updated Content');
      this.getGameFromServer();
    });
  }
  
  checkForTitle(searchValue: string): void {
    let searchList = this.gameList.filter(c => c.title == searchValue);
    if (searchList.length > 0) {
      this.searchMessage = "Found the Game!";
      this.searchFlag = true;
    }
    else {
      this.searchMessage = "No Game with that title";
      this.searchFlag = false;
    }
  }
  addContentToParent(contentFromChild: Content) {
    console.log("got to the parent", contentFromChild);
    this.gameList.push(contentFromChild);
    console.log("what's actually in the Game list? ", this.gameList);
    this.gameList = [...this.gameList]; //clone for the pipe
  }
}
