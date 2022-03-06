import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;
  constructor() { }

  ngOnInit(): void {
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
