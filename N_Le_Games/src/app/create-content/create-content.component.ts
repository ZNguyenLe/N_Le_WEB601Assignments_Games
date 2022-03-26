import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<Content>();
  newGame: Content = {
    id: -1, title: "", description: '', creator: '', type: undefined
  };
  tempId: string = '';
  tempTags: string = '';
  errorMsg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addGameFromChild(): void {
    let gamePromise = new Promise((success, fail) => {
      if (!this.tempId || !this.newGame.title || !this.newGame.description || !this.newGame.creator)
      {
        fail ('something isnt right');
        return;
      }
      console.log('childs working');
      this.newGame.tags = this.tempTags;
      this.newGame.id = parseInt(this.tempId);
      this.newGameEvent.emit(this.newGame);
      success('content added' + this.newGame.id + ", title is: " + this.newGame.title)
    });
    gamePromise.then((successMessage) => {
      console.log(successMessage);
      this.newGame = {
        id: -1, title: "", description: '', creator: '', type: undefined
      };
      this.tempId = '';
      this.tempTags = '';
      this.errorMsg = '';
    }).catch(failMsg => {
      this.errorMsg = "it took a big poop and failed" + failMsg;
    });
  }
  addGame(id: string, title: string, description: string, imgURL: string, creator: string, tags: string, type: string): void{
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      imgURL: imgURL,
      creator: creator,
      tags: tags,
      type: type
    };
    this.newGameEvent.emit(this.newGame);
  }
}
