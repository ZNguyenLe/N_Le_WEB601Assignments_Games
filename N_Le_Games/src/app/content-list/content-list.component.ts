import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  //@Input() lotsofgames: Content[] ;

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
}
