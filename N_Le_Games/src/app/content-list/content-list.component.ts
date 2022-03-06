import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  //@Input() lotsofgames: Content[] ;
  lotsofgames: Content[] = [
    {
      id: 1,
      title: "Fortnite",
      description: "An Online Battle Royal PVP Game",
      creator: "Epic Games",
      imgURL: "http://cm1.narvii.com/7192/f75cb8c8074b5ccc961668aa91bbec9256a4c544_00.jpg",
      type: "Game",
      tags: "gaming"
    },
    {
      id: 2,
      title: "Valorant",
      description: "An Online Shooter PVP",
      creator: "Riot Games",
      imgURL: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/9ebd41e6cbc1e14780805f6fc0d65867.png",
      type: "Game",
      tags: "gaming"
      
    },
    {
      id: 3,
      title: "League of Legends",
      description: "An Online 5 Moba PVP Game",
      creator: "Riot Games",
      imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
      type: "Game",
      tags: "gaming"
    },
    {
      id: 4,
      title: "Dota 2",
      description: "An Online 5 Moba PVP Game",
      creator: "Valve Corporation",
      imgURL: "https://cdn-icons-png.flaticon.com/512/871/871366.png",
      type: "Game",
      tags: "gaming"
    },
    {
      id: 5,
      title: "Genshin Impact",
      description: "An Open World action RPG",
      creator: "Mihoyo",
      imgURL: "https://preview.redd.it/fi4oa3o2w7t51.png?auto=webp&s=89f13a8454a198909a57288b40c277e4eb677524",
      type: "Game",
      tags: "gaming"
    },
    {
      id: 6,
      title: "Grand Theft Auto V",
      description: "An action-adventure game",
      creator: "Rockstar Games",
      imgURL: "https://image.pngaaa.com/575/2397575-middle.png",
      type: "Game",
      tags: "gaming"
    },
     ] 
     constructor() {}

  ngOnInit(): void {
  }
  addGameToList(newGameFromChild: any) {
    this.lotsofgames.push(newGameFromChild);
      this.lotsofgames = [...this.lotsofgames];
     console.log('things get added?', newGameFromChild);
     console.log(this.lotsofgames);
  }
}
