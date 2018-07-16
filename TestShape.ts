/// <reference path="IShape.ts"/>
/// <reference path="Circle.ts"/>
/// <reference path="Triangule.ts"/>

namespace Drawing {
    function drawAllShapes(shape:Drawing.IShape){
        shape.draw();
    }

    drawAllShapes(new Drawing.Circle());
    drawAllShapes(new Drawing.Triangule());
}