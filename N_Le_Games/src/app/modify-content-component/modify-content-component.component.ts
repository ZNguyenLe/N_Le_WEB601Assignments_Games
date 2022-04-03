import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

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
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog Window Closed');
      console.log(result);
      this.newGame = result;
      this.newGameEvent.emit(this.newGame);
    });
    console.log('this is clicked to open dialog');
  }

}

// ----------------------------------------------------------------------------

@Component({
  selector: 'modify-content-component-dialog',
  templateUrl: 'modify-content-component-dialog.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})

export class DialogContent {
// ----------------------------------------------------------------------------
// ProgressSpinnerMode Material

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

// ----------------------------------------------------------------------------
// Dialog Material
constructor (
    public dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: Content) {}

    @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
    newGame?: Content;

    addGame(title: string, description: string, imgURL: string, creator: string, tags: string, type: string): void {
      this.newGame = {
        title: title,
        description: description,
        imgURL: imgURL,
        creator: creator,
        tags: tags,
        type: type
      };
      console.log(this.newGame);
      this.dialogRef.close(this.newGame);
    }

  onNoClick() {
    this.dialogRef.close();
  }
}