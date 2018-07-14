class Car {
    engine:string;

    constructor(engine:string){
        this.engine = engine;
    }

    disp():void {
        console.log("Engine is: " + this.engine);
    }
}

var obj = new Car("XXSY1");

console.log("Reading attribute value Engine as: " + obj.engine);

obj.disp();

class Shape {
    Area:number;
    
    constructor(a:number){
        this.Area = a;
    }
}

class Circle extends Shape {
    disp():void{
        console.log("Area of the circle: " + this.Area);
    }
}

var obj2 = new Circle(223);
obj2.disp();

class Root {
    str:string;
}

class Child extends Root {

}

class Leaf extends Child {

}

var obj3 = new Leaf();
obj3.str = "Hello";
console.log(obj3.str);

class PrinterClass {
    doPrint():void {
        console.log("doPrint() from Parent called...");
    }
}

class StringPrinter extends PrinterClass {
    doPrint():void{
        super.doPrint();
        console.log("doPrint() is printing a string...");
    }
}

var obj4 = new StringPrinter();
obj4.doPrint();

class StaticMem {
    static num:number;

    static disp():void{
        console.log("The value of num is " + StaticMem.num);
    }
}

StaticMem.num=12;
StaticMem.disp();


class Person {

}
var obj5 = new Person();
var isPerson = obj5 instanceof Person;
console.log("obj is an instance of Person " + isPerson);

class Encapsulate {
    str:string="hello";
    private str2:string="world";
}

var obj6 = new Encapsulate();
console.log(obj6.str);
console.log();

interface ILoan {
    interest:number
}

class AgriLoan implements ILoan {
    public interest:number;
    public rebate:number;

    constructor(interest:number, rebate: number){
        this.interest = interest;
        this.rebate = rebate;
    }
}

var obj7 = new AgriLoan(10,1);
console.log("Interest is: " + obj7.interest + " Rebate is: " + obj7.rebate);