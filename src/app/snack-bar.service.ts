import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar){ }

  openSnackBar(message: string,action: any){
    let snackBarRef = this.snackBar.open(message,action,{
      duration: 5000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'start', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['warning']
      
  });

  snackBarRef.onAction().subscribe(() =>{
    // any action you want to do

  })
}
}
