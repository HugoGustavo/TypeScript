/// <reference path="IShape.ts"/>

namespace Drawing {
    export class Triangule implements IShape {
        public draw():void{
            console.log("Triangule is drawn");
        }
    }
}