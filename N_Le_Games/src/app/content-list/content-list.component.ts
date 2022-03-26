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

  checkForTitle(searchValue: string): void {
    let searchList = this.gameList.filter(c => c.title == searchValue);
    if (searchList.length > 0) {
      this.searchMessage = "Found the movie!";
      this.searchFlag = true;
    }
    else {
      this.searchMessage = "No movie with that title";
      this.searchFlag = false;
    }
  }
  addContentToParent(contentFromChild: Content) {
    console.log("got to the parent", contentFromChild);
    this.gameList.push(contentFromChild);
    console.log("what's actually in the movie list? ", this.gameList);
    this.gameList = [...this.gameList]; //clone for the pipe
  }
}
