import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private update: SwUpdate, private snackBar: MatSnackBar) { 
    // const stableApp = this.appRef.isStable.pipe(first(isStable => isStable === true));
    // const every1min = interval(6000);
    // const morestable = concat(stableApp, every1min);
    // morestable.subscribe(() => this.update.checkForUpdate());
  }

  openSnack(message: string, action: SwUpdate) {
    this.snackBar.open('there is an update available', 'update', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}
  public init() {
    this.update.versionUpdates.subscribe(event => {
      console.log('check changes if there is any');
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`lemme download the new version for ya:  ${event.version.hash }`);
          break;
        case 'VERSION_READY': 
          console.log(`Current Version: ${event.currentVersion.hash}`);
          console.log(`gotchu a new update ready: ${event.latestVersion.hash}`);
          this.update.activateUpdate().then(() => {
            this.snackBar.open('Update is Available', 'Update')
            .onAction().subscribe(() => document.location.reload());
          });
          break;
      }
    });
  }
}
