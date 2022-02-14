import { SelectorMatcher } from '@angular/compiler';
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
      type: "PVP",
      tags: "PVP"
    },
    {
      id: 2,
      title: "Valorant",
      description: "An Online Shooter PVP",
      creator: "Riot Games",
      imgURL: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/9ebd41e6cbc1e14780805f6fc0d65867.png",
      type: "PVP",
      tags: "PVP"
      
    },
    {
      id: 3,
      title: "League of Legends",
      description: "An Online 5 Moba PVP Game",
      creator: "Riot Games",
      imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
      type: "",
      tags: "PVP"
    },
    {
      id: 4,
      title: "Dota 2",
      description: "An Online 5 Moba PVP Game",
      creator: "Valve Corporation",
      imgURL: "https://cdn-icons-png.flaticon.com/512/871/871366.png",
      type: "",
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
      tags: ""
    },
    {
      id: 7,
      title: "Risk of Rain 2",
      description: "Survival Game",
      creator: "Hopoo Games",
      imgURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2563bd70-7313-427d-b74c-bd2f44dfb937/de5hxrt-9b723b4b-d688-4490-b9e0-eea843ca98f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1NjNiZDcwLTczMTMtNDI3ZC1iNzRjLWJkMmY0NGRmYjkzN1wvZGU1aHhydC05YjcyM2I0Yi1kNjg4LTQ0OTAtYjllMC1lZWE4NDNjYTk4ZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UJy6LmeVKqa9zGUc53cywvEbFiOra_u779km9nUbos8",
      type: "Game",
      tags: "gaming"
    }
  ] 
  
  stringFilter(gameName: string): void {
    const game = this.lotsofgames.findIndex((item)=> item.title.toLowerCase());
    if(game === 1) {
      console.log('this exists', game);
      console.log("We did it, ", gameName);
      
    }
    else {
      console.log('nothing exists', gameName);
      console.log("before I tried changing it, ", gameName);
    }
    
    gameName = gameName;
    
  }   
     constructor() {
     }

  ngOnInit(): void {
  }

}
