import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BigT';
  constructor (private snackBservice:SnackBarService){}

  trigger(message:string,action:string,)
  {
    this.snackBservice.openSnackBar(message,action);
  }
}
