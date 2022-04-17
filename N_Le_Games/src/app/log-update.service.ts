import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';


@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  constructor(private update: SwUpdate
              // private snackBar: MatSnackBar
              ) { }

  // openSnack(message: string, action: string) {
  //   this.snackBar.open(message, action);
  // }
  
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
          this.update.activateUpdate().then(() => document.location.reload());
          break;
      }
    });
  }
}
