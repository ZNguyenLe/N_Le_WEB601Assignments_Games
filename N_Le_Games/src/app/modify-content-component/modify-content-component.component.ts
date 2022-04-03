import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addGame(title: string, description: string, imgURL: string, creator: string, tags: string, type: string): void {
    this.newGame = {
      //id shouldnt be neeeded but it will be here
      title: title,
      description: description,
      imgURL: imgURL,
      creator: creator,
      tags: tags,
      type: type
    };
    this.newGameEvent.emit(this.newGame);
  }
  updateGame(id: string, title: string, description: string, imgURL: string, creator: string, tags: string, type: string): void {
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      imgURL: imgURL,
      creator: creator,
      tags: tags,
      type: type
    };
    this.updateGameEvent.emit(this.newGame);
  }
  openDialog() {
    this.dialog.open(ModifyContentComponentComponent);
    console.log('this is clicked to open dialog');
  }
}

@Component({
  selector: 'modify-content-component-dialog',
  templateUrl: 'modify-content-component-dialog.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class DialogContent {
  constructor (
    ) {}


}