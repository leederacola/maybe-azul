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


    //set tile
    //tile number = class location on grid
    // setTile(tileNumber: number){
    //     this.TileBoard[tileNumber].setHasTile();
    //     let s = tileNumber.toString();
    //     let tile = document.getElementsByClassName(s);
    //     tile[0].classList.add("set");
    // }
    // removeTile(tileNumber: number){
    //     this.TileBoard[tileNumber].setRemoveTile();
    //     let s = tileNumber.toString();
    //     let tile = document.getElementsByClassName(s);
    //     tile[0].classList.remove("set");
    // }
    toggleTileSet(n: number){
        let s = n.toString();
        let tile = document.getElementsByClassName(s);
        if(tile[n].classList.contains("set")){
            tile[0].classList.remove("set");
            this.TileBoard[n].hasTile = false;
        }
        else{
            tile[0].classList.add("set");
            this.TileBoard[n].hasTile = true;         
        }

    }


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
