import { Component, OnInit } from '@angular/core';

import { AzulGame } from '../classes/azul-game';
import {AzulTile } from '../classes/azul-tile';

@Component({
  selector: 'app-azul',
  templateUrl: './azul.component.html',
  styleUrls: ['./azul.component.css']
})
export class AzulComponent implements OnInit {

  score: number = 0;

  playGame(){
    let game = new AzulGame();
    let board = game.TileBoard;
    game.setTile(9);
    game.checkLeft(9);
    console.log(board[9].hasTile);
    console.log(board[9].hasAbove);
    console.log(board[9].hasBelow);
    console.log(board[9].hasLeft);
    console.log(board[9].hasRight);
  }
  
  
  
  
  



  constructor() { }

  ngOnInit() {
    this.playGame();
  }

}
