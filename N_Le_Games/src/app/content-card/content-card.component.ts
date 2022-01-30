import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
fortnite: Content;
  constructor() { 
    this.fortnite = {
        id: 1,
        title: "Fortnite",
        description: "An Online Battle Royal PVP Game",
        creator: "Epic Games",
        imgURL: "https://static.wikia.nocookie.net/logopedia/images/d/db/Fortnite_S1.svg/revision/latest/scale-to-width-down/250?cb=20210330161743",
        type: "Game"
    };
  }

  ngOnInit(): void {
  }

}
