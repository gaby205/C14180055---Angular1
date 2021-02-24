import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  board : any[][];
  player : any = "1"
  brs : number;
  kol : number;
  gamestat : boolean = false;
  p1 : number;
  p2 : number;
  win : any;

  constructor(){
    this.board = []
    for(let i=1; i<6; i++)
    {
      this.board[i]= []
      for(let j=1; j<6; j++)
      {
          this.board[i][j] ="*";
      }
    }
  }

  checking(){
    if (this.gamestat == false)
    {
      if(this.brs>0 && this.brs<=5 && this.kol>0 && this.kol<=5)
      {
          if(this.board [this.brs][this.kol] == "*"){
           this.board[this.brs][this.kol] = this.player;
           if(this.player == "1"){
             this.player = "2";
           }
           else{
             this.player = "1";
           }
           this.winlosestat();
         }
         else{
           alert("Baris atau kolom yang dipilih sudah diisi, silahkan diganti :)");
         }
      }
      else if(this.brs < 0){
      alert("Baris dimulai dari 1");
      }
      else if(this.brs > 5){
        alert("Baris tidak boleh lebih dari 5");
      }
      else if(this.kol < 0){
        alert("Kolom dimulai dari 1")
      }
      else if(this.kol > 5){
        alert("Kolom tidak boleh lebih dari 5")
      }
      else{
        alert("Baris atau kolom tidak memenuhi syarat, harus angka 1-5, silahkan dicek kembali")
      }
    } 
    else
    {
      location.reload();
    }
  }

  winlosestat()
  {
    // CEK BARIS
    for(var i=1; i<6; i++){
       this.p1=0;
       this.p2=0;
       for(var j=1; j<6; j++){
         if(this.board[j][i] == "1"){
           this.p1 += 1;
         }
         else if(this.board[j][i] == "2"){
           this.p2 += 1;
         }
       }
       if(this.p1 >= 4){
         this.win = "CONGRATS! Player 1 WIN (PLEASE CLICK THE BUTTON TO RESTART)";
         this.gamestat = true;
       }
       else if(this.p2 >= 4){
         this.win= "CONGRATS! Player 2 WIN (PLEASE CLICK THE BUTTON TO RESTART)"
         this.gamestat = true;
       }
     }

    // CEK KOLOM
    for(var i=1; i<6; i++){
        this.p1=0;
        this.p2=0;
        for(var j=1; j<6; j++){
           if(this.board[i][j] == "1"){
           this.p1 += 1;
         }
         else if(this.board[i][j] == "2"){
           this.p2 += 1;
         }
        }
        if(this.p1 >= 4){
         this.win = "CONGRATS! Player 1 WIN (PLEASE CLICK THE BUTTON TO RESTART)";
         this.player = ".";
         this.gamestat = true;
       }
       else if(this.p2 >= 4){
         this.win= "CONGRATS! Player 2 WIN (PLEASE CLICK THE BUTTON TO RESTART)"
         this.player = ".";
         this.gamestat = true;
       }
      }
   }
}
