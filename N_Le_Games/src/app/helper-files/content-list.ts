//import { Content } from "@angular/compiler/src/render3/r3_ast";
import { Input } from "@angular/core";
import { Content } from "./content-interface";

export class ContentList {
    private game: Content[]; //a private array of content
    static gameCount = 0;
    
    constructor() {  
        this.game = [];
        this.increaseCount();
        
        }
        addGame(item:Content) { //add a game to the end of array
            this.items.push(item);
        // let game = ['game1', 'game2', 'game3'];
        //     game.push('game4');
        //     console.log(game.length);  
        }     

        increaseCount(){
            return ++ContentList.gameCount;
        }
        
        get items(): Content[] {
        return this.game;
        }
        gamelength(){
            return this.game.length;
        }

        gameOutput(index:number):string {
            if (this.gamelength() <= index) {
                return '<p>index is out of range</p>';
            }
            return '<h2>Title: ' + this.game[index].title + '</h2>' 
                + '<img src=' + this.game[index].imgURL + '>' 
                + '<p>Description: ' + this.game[index].description + '</p>' 
                + '<p>Creator: ' + this.game[index].creator + '</p>' 
                
                + '<p>Type: ' + this.game[index].type + '</p>'; 

            }
        
}

