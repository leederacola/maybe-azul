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


  toggleTileSet(n: number){
    let s = n.toString();
    let tile = document.getElementsByClassName(s);
    if(tile[0].classList.contains("set")){
        tile[0].classList.remove("set");
        this.board[n].hasTile = false;
    }
    else{
        tile[0].classList.add("set");
        this.board[n].hasTile = true;         
    }
    this.currentTile = n;
    console.log(this.board[n].hasTile);
}
  scoreTile(){
    let tileNumber = this.currentTile;
    let board = this.board;
    
    if(board[tileNumber - 1].hasTile){
      this.score++;
    }
    if(board[tileNumber + 1].hasTile){
      this.score++;
    }
    if(board[tileNumber + 5].hasTile){
      this.score++;
    }
    if(board[tileNumber - 5].hasTile){
      this.score++;
    }


  }


  constructor() { }

  ngOnInit() {
    this.startNewGame();
  }

}
