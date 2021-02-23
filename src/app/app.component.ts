import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  brs:number;
  kol:number;
  a=0;
  b=1;
  board = [
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"]
  ];

  newboard : String[][];

  changboard(){
    this.newboard = this.board;
    this.newboard[this.brs][this.kol] = "1";
  }

}
