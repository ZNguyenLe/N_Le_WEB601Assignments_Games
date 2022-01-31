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
    imgURL: "https://static.wikia.nocookie.net/leagueoflegends/images/0/07/League_of_Legends_icon.png/revision/latest?cb=20191018194326",
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
