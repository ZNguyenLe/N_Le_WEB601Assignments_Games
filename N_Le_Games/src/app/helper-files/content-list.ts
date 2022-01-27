import { Content } from "@angular/compiler/src/render3/r3_ast";

class ContentList {
    private _Content: Content[];
    constructor(){
        this._Content = [];
    }
    get Content(): Content[] {
        return this._Content;
    }
    
}