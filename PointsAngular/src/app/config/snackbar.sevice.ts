import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
 private defaultDuration: number = 4;
 horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private snackBar : MatSnackBar) { }

  public  showSnackBar(message : string, action : string, durationParam?: number){
    this.snackBar.open(message, action,
       {duration :durationParam!= null? durationParam *5000: this.defaultDuration*5000}
        );
  }
  public  showSnack(message : string, action : string, durationParam?: number){
    this.snackBar.open(message, action,
       {duration :durationParam!= null? durationParam *1000: this.defaultDuration*1000,
        verticalPosition:this.verticalPosition,
        horizontalPosition:this.horizontalPosition}
        );
  }
}
