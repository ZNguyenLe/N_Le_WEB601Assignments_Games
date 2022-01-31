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
    imgURL: "http://cm1.narvii.com/7192/f75cb8c8074b5ccc961668aa91bbec9256a4c544_00.jpg",
    type: "Game"
  };
  valorant: Content = {
    id: 2,
    title: "Valorant",
    description: "An Online Shooter PVP",
    creator: "Riot Games",
    imgURL: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/9ebd41e6cbc1e14780805f6fc0d65867.png",
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
