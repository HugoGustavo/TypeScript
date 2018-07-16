var person = {
    firstName: "Tom",
    lastName:"Hanks",
    sayHello:function(){}
};

console.log(person.firstName);
console.log(person.lastName);

person.sayHello = function(){
    return "Hello";
};

person.sayHello();

var person2 = {
    firstName:"Tom",
    lastName:"Hanks"
};
var invokeperson = function( obj : { firstName:string, lastName:string } ) {
    console.log("First Name: " + obj.firstName);
    console.log("Last Name: " + obj.lastName);
}
invokeperson(person2);

var invokeperson2 = function (obj:{firstName:string, lastName:string}){
    console.log("First Name: " + obj.firstName);
    console.log("Last Name: " + obj.lastName);
}
invokeperson2({firstName:"Sachin", lastName:"Tendulkar"})

interface IPoint {
    x:number,
    y:number
}
function addPoints(p1:IPoint, p2:IPoint):IPoint {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return {x:x, y:y};
}

// Valid
var newPoint = addPoints({x:3,y:4}, {x:5,y:1});
console.log(newPoint);