//import { Content } from "@angular/compiler/src/render3/r3_ast";
import { Input } from "@angular/core";
import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[]; //a private array of content
    static gameCount = 0;

    constructor() { //sets initial value of items to be empty
        this._items = [];

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
        return this._items;
        }
        gamelength(){
            return this._items.length;
        }

        gameOutput(index:number):string {
            if (this.gamelength() <= index) {
                return '<p>index is out of range</p>';
            }
            return '<h1>Title: ' + this._items[index].title + '</h1>' 
                + '<h1>Description: ' + this._items[index].description + '</h1>' 
                + '<h1>Creator: ' + this._items[index].creator + '</h1>' 
                + '<h1>imgURL: ' + this._items[index].imgURL + '</h1>' 
                + '<h1>Type: ' + this._items[index].type + '</h1>'; 

            }
        
}

