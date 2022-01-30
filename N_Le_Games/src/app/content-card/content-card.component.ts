import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  fortnite: Content = {
    id: 1,
    title: "Fortnite",
    description: "An Online Battle Royal PVP Game",
    creator: "Epic Games",
    imgURL: "https://static.wikia.nocookie.net/logopedia/images/d/db/Fortnite_S1.svg/revision/latest/scale-to-width-down/250?cb=20210330161743",
    type: "Game"
  };
  valorant: Content = {
    id: 2,
    title: "Valorant",
    description: "An Online Shooter PVP",
    creator: "Riot Games",
    imgURL: "https://cdn3.vectorstock.com/i/1000x1000/37/87/valorant-game-logo-icon-eps-10-gaming-streamer-vector-33193787.jpg",
    type: "Game"
  };
  LeagueOfLegends: Content = {
    id: 3,
    title: "League of Legends",
    description: "An Online 5 Moba PVP Game",
    creator: "Riot Games",
    imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
    type: "Game"
  };
  
  contentList = new ContentList();

  constructor() { 
    this.contentList.addGame(this.fortnite);
    this.contentList.addGame(this.valorant);
    this.contentList.addGame(this.LeagueOfLegends);
  }
  

  ngOnInit(): void {
    
  }

}
