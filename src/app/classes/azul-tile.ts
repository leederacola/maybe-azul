import { Color } from '../classes/color.enum';

export class AzulTile {
    // tile color not needed for simple score keeper, will be need for complete game logic
    // tileColor: Color;
    position: number;
    hasTile: boolean;
    hasLeft: boolean;
    hasRight: boolean;
    hasAbove: boolean;
    hasBelow: boolean;

    constructor(pos: number){
        this.position = pos
    }

    setHasTile(){
        this.hasTile = true;
    }
    setHasLeft(){
        this.hasLeft = true;
    }
    setHasRight(){
        this.hasRight = true;
    }
    setHasAbove(){
        this.hasAbove = true;
    }
    setHasBelow(){
        this.hasBelow = true;
    }

}



class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");