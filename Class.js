var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
}());
var obj = new Car("XXSY1");
console.log("Reading attribute value Engine as: " + obj.engine);
obj.disp();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle: " + this.Area);
    };
    return Circle;
}(Shape));
var obj2 = new Circle(223);
obj2.disp();
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child));
var obj3 = new Leaf();
obj3.str = "Hello";
console.log(obj3.str);
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called...");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string...");
    };
    return StringPrinter;
}(PrinterClass));
var obj4 = new StringPrinter();
obj4.doPrint();
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj5 = new Person();
var isPerson = obj5 instanceof Person;
console.log("obj is an instance of Person " + isPerson);
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj6 = new Encapsulate();
console.log(obj6.str);
console.log();
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj7 = new AgriLoan(10, 1);
console.log("Interest is: " + obj7.interest + " Rebate is: " + obj7.rebate);
