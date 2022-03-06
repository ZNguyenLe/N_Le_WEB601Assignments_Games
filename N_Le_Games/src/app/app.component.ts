//import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Component({
  selector: 'app-root', // app-content-card
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'N_Le_Games';
  lotsofgames: Content[];
  constructor() { 
    this.lotsofgames = [
    {
      id: 1,
      title: "Fortnite",
      description: "An Online Battle Royal PVP Game",
      creator: "Epic Games",
      imgURL: "http://cm1.narvii.com/7192/f75cb8c8074b5ccc961668aa91bbec9256a4c544_00.jpg",
      type: "Game"
    },
    {
      id: 2,
      title: "Valorant",
      description: "An Online Shooter PVP",
      creator: "Riot Games",
      imgURL: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/9ebd41e6cbc1e14780805f6fc0d65867.png",
      type: "Game"
    },
    {
      id: 3,
      title: "League of Legends",
      description: "An Online 5 Moba PVP Game",
      creator: "Riot Games",
      imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
      type: "Game"
    },
    {
      id: 4,
      title: "Dota 2",
      description: "An Online 5 Moba PVP Game",
      creator: "Valve Corporation",
      imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
      type: "Game"
    },
    {
      id: 5,
      title: "Genshin Impact",
      description: "An Open World action RPG",
      creator: "Mihoyo",
      imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
      type: "Game"
    },
    {
      id: 6,
      title: "Grand Theft Auto V",
      description: "An action-adventure game",
      creator: "Rockstar Games",
      imgURL: "https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289",
      type: "Game"
    }];
    // supposedly the promise thing. 
    let ourPromise = new Promise((success , fail) => {
      let pass  = false;
      if (pass) {
        success("Success achieved");
      }
      else {
        fail("poop failuer");
      }
 
    })
    // 
    ourPromise.then(function (successMsg) {
      console.log('promise success with,', successMsg);
    })
    .catch(function (failureMsg) {
      console.log('promise failed with,', failureMsg);
    })
   }

   
   
   addGameToList(event: any) {
     this.lotsofgames.push(event);
       this.lotsofgames = [...this.lotsofgames];
      console.log('things get added?', event);
      console.log(this.lotsofgames);
   }
  
}
