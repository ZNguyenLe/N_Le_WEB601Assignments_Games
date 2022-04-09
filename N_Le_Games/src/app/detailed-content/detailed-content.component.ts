import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameServiceService } from '../game-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-content',
  templateUrl: './detailed-content.component.html',
  styleUrls: ['./detailed-content.component.scss']
})
export class DetailedContentComponent implements OnInit {
  id?: number;
  gameItem?: Content;
  constructor(private route: ActivatedRoute, private gameService: GameServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0");
      this.gameService.getContent3(this.id).subscribe(
        (c) => {
          this.gameItem = c;
        })
    })
  }

}
