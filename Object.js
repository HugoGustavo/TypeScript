var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { }
};
console.log(person.firstName);
console.log(person.lastName);
person.sayHello = function () {
    return "Hello";
};
person.sayHello();
var person2 = {
    firstName: "Tom",
    lastName: "Hanks"
};
var invokeperson = function (obj) {
    console.log("First Name: " + obj.firstName);
    console.log("Last Name: " + obj.lastName);
};
invokeperson(person2);
var invokeperson2 = function (obj) {
    console.log("First Name: " + obj.firstName);
    console.log("Last Name: " + obj.lastName);
};
invokeperson2({ firstName: "Sachin", lastName: "Tendulkar" });
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
// Valid
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
console.log(newPoint);
