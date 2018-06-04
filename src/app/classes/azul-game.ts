import { AzulTile } from '../classes/azul-tile';

export class AzulGame {

    TileBoard:AzulTile[] = new Array(24);
    Score: number = 0;


    constructor(){
        this.fillBoardTiles();
    }

    // make arrsy of 25 tiles
    fillBoardTiles(){
        for(let i = 0; i < 25; i++)
        {
            this.TileBoard[i]= new AzulTile();
        }
    }


    // set tile
    // setTile(tileNumber: number){
    //     this.TileBoard[tileNumber].setHasTile();
    //     let board = this.TileBoard;

    //     if(board[tileNumber-1])
    // }
    checkTile(tileNumber: number){
        let tile = this.TileBoard[tileNumber];
        return (tile.hasTile);
    }

    // combine the checkFunctions?

    checkLeft(tileNumber: number){
        let board = this.TileBoard; // start at newly places tile
        let tile = this.TileBoard[tileNumber];
        //loop
        while(tile.hasTile)
        {
            tile = board[tileNumber-1]; // move left   
            this.Score ++;// add to score
        } 
    }

    checkRight(tileNumber: number){
        let board = this.TileBoard; // start at newly places tile
        let tile = this.TileBoard[tileNumber];
        //loop
        while(tile.hasTile)
        {
            tile = board[tileNumber+1]; // move left   
            this.Score ++;// add to score
        } 
    }

    checkAbove(tileNumber: number){
        let board = this.TileBoard; // start at newly places tile
        let tile = this.TileBoard[tileNumber];
        //loop
        while(tile.hasTile)
        {
            tile = board[tileNumber-5]; // move left   
            this.Score ++;// add to score
        } 
    }

    checkBelow(tileNumber: number){
        let board = this.TileBoard; // start at newly places tile
        let tile = this.TileBoard[tileNumber];
        //loop
        while(tile.hasTile)
        {
            tile = board[tileNumber+10]; // move left   
            this.Score ++;// add to score
        } 
    }
    // combine the checkFunctions?


}
