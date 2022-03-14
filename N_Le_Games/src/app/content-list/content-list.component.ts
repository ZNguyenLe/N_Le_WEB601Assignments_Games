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
  lotsofgames: Content[];
  content: Content | undefined;
     constructor(private gameService: GameServiceService) {
       this.lotsofgames = [];
     }

     ngOnInit(): void {
      this.lotsofgames = this.gameService.getContent();
      // an async call using that one arrow thing
      this.gameService.getContentObs().subscribe(GameArray => this.lotsofgames = GameArray);
      // another one but works the same. (looked at lecture notes)
      this.gameService.getContentObs().subscribe(GameArray => {
        return this.lotsofgames = GameArray;
      })
      this.gameService.getIdContent(4).subscribe((item) => {
        this.content = item;
        return item;
      })
    }
  
  addGameToList($newGameFromChild: any) {
    this.lotsofgames.push($newGameFromChild);
      this.lotsofgames = [...this.lotsofgames];
     console.log('things get added?', $newGameFromChild);
     console.log(this.lotsofgames);
  }
}
