import { Component, OnInit } from '@angular/core';

import { AzulGame } from '../classes/azul-game';
import { AzulTile } from '../classes/azul-tile';

@Component({
  selector: 'app-azul',
  templateUrl: './azul.component.html',
  styleUrls: ['./azul.component.css']
})
export class AzulComponent implements OnInit {

  score: number;
  game: AzulGame = new AzulGame();
  board = this.game.TileBoard;
  currentTile: number; // feedback for user on tile location current editing

  startNewGame(){
    this.game = new AzulGame();
    this.board = this.game.TileBoard;
    this.score = 0;
  }

  clearScore(){
    this.score = 0;
  }


  toggleTileSet(n: number) {
    let s = n.toString();
    let tile = document.getElementsByClassName(s);
    if (tile[0].classList.contains("set")) {
      tile[0].classList.remove("set");
      this.board[n].hasTile = false;
    }
    else {
      tile[0].classList.add("set");
      this.board[n].hasTile = true;
    }
    this.currentTile = n;
    console.log(this.board[n].hasTile);
  }


  scoreTile() {
    let tileNumber = this.currentTile;
    let board = this.board;
    let moveL = (tileNumber % 5);
    let moveR = (4 - (tileNumber % 5));
    let moveU = (tileNumber % 5);
    let moveD = (tileNumber % 5);
    let newScore = 0;

  //   // start left traversail
  //   if (tileNumber > 0) {     
  //     for (let i = 0; i < moveL; i++) {
  //       console.log("loop left # " + i);        
  //       // move left
  //       {
  //         if (this.board[tileNumber - i].hasTile) {
  //           newScore++;
  //         }
  //       }
  //     }
  //   }
  //   else{
  //     console.log("newScore ++ left loop");
  //     newScore++; // tile is 0
  //   }// end left traversial
    

    
  // if(tileNumber < 24){
  //   for (let i = 0; i < moveR; i++) {
  //     console.log("loop right # " + i);       
  //     // move right
  //     {
  //       if (this.board[tileNumber + i].hasTile) {
  //         newScore++;
  //         console.log("newScore ++  inside right loop");
  //       }
  //     }
  //   }
  // }
  // else{
  //   newScore++; // tile is 24
  //   console.log("newScore ++ right loop");
  // }// end left traversial



    // above checks
    if (tileNumber >= 5) {     
      for (let i = 0; i < moveU; i++) {
        console.log("loop above # " + i);        
        // move left
        {
          if (this.board[tileNumber - (i*5)].hasTile) {
            newScore++;
          }
        }
      }
    }
    else{
      console.log("newScore ++ above loop");
      newScore++; // tile is 0
    }// end above


    if (tileNumber <= 19 ) {     
      for (let i = 0; i < moveD; i++) {
        console.log("loop above # " + i);        
        // move left
        {
          if (this.board[tileNumber + (i*5)].hasTile) {
            newScore++;
          }
        }
      }
    }
    else{
      console.log("newScore ++ above loop");
      newScore++; // tile is 0
    }// end above
  
    console.log("score to be added: " + newScore);
    this.score += newScore;
  } // end score func


 



  constructor() { 
    this.startNewGame();
    
  }

  ngOnInit() { 
    
  }

}
