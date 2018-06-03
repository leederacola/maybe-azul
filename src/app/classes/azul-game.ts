import { AzulTile } from '../classes/azul-tile';

export class AzulGame {

    TileBoard:AzulTile[];
    Score: number = 0;


    constructor(){
    }

    // make arrsy of 25 tiles
    fillBoardTiles(){
        for(let i = 0; i < 25; i++)
        {
            this.TileBoard[i]= new AzulTile(i);
        }
    }


    // set tile
    setTile(tileNumber: number)
    {
        this.TileBoard[tileNumber].setHasTile();
    }

    checkLeft(){
        // tile properity is border right/left 
        // ex tile #4 top right aint need to plus 1 for has rught check
    }



}
