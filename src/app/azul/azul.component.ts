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

  startNewGame() {
    this.game = new AzulGame();
    this.board = this.game.TileBoard;
    this.score = 0;
  }

  clearScore() {
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
    let moveL = (tileNumber % 5) + 1;
    let moveR = (5 - (tileNumber % 5));
    let moveU = (tileNumber / 5);
    let moveB = ((25 - tileNumber) / 5);
    let newScore = 0;
    let horz = false;
    let vert = false;

    //start left traversail
    console.log("start left traversial...............................");
    if (tileNumber > 0) {
      for (let i = 1; i < moveL; i++) {
        console.log("loop left # " + i);
        // move left
        {
          if (this.board[tileNumber - i].hasTile) {
            console.log("left + 1...");
            newScore++;
            horz = true;
          }
          else break;
        }
      }
    }
    else {
      newScore++; // tile is 0
    }// end left traversial


    console.log("start right traversial...............................");
    if (tileNumber < 24) {
      for (let i = 1; i < moveR; i++) {
        console.log("loop right # " + i);
        // move right
        {
          if (this.board[tileNumber + i].hasTile) {
            newScore++;
            horz = true;
            console.log("right + 1...");
          }
          else break;
        }
      }
    }// end left traversial



    console.log("start above traversial...............................");
    if (tileNumber > 4) {


      for (let i = 1; i <= moveU; i++) {
        console.log("loop above # " + i);
        // move left


        if (this.board[tileNumber - (5 * i)].hasTile) {
          console.log("above + 1...");
          newScore++;
          vert = true;

        }
        else break;

      }
    }// end above

    console.log("start below traversial...............................");
    if (tileNumber < 20) {
      for (let i = 1; i <= moveB; i++) {
        console.log("loop below # " + i);
        if (this.board[tileNumber + (i * 5)].hasTile) {
          console.log("below + 1...");
          newScore++;
          vert = true;
        }
        else break;
      }
    }// end below


    // placed tile copunts twice for vert and horz points
    if (horz && vert) {
      console.log("set tile scored twice");
      newScore++;
      newScore++;
    }
    //only horz or vert
    else {
      console.log("set tile scored once");
      newScore++;
    }

    this.score = newScore;
  } // end score func



clearBoard() {
  let e = document.getElementsByClassName("set");
  console.log("elements with set class length " + e.length);
  for (let i = 0; i < e.length; i++) {
    let e = document.getElementsByClassName("set");
    e[0].classList.remove("set");

  }
}






constructor() {
  this.startNewGame();

}

ngOnInit() {

}

}
