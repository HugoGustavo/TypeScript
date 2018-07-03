var str = new String("This is string");
console.log("str.constructor is: " + str.constructor);

var uname = new String("Hello World");
console.log(uname);
console.log("Length " + uname.length);

function employee(id:number, name:string){
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);

var str = new String("This is string");
console.log("str.charAt(0) is: " + str.charAt(0));
console.log("str.charAt(1) is: " + str.charAt(1));
console.log("str.charAt(2) is: " + str.charAt(2));
console.log("str.charAt(3) is: " + str.charAt(3));
console.log("str.charAt(4) is: " + str.charAt(4));
console.log("str.charAt(5) is: " + str.charAt(5));

console.log("str.charCodeAt(0) is: " + str.charCodeAt(0));
console.log("str.charCodeAt(1) is: " + str.charCodeAt(1));
console.log("str.charCodeAt(2) is: " + str.charCodeAt(2));
console.log("str.charCodeAt(3) is: " + str.charCodeAt(3));
console.log("str.charCodeAt(4) is: " + str.charCodeAt(4));
console.log("str.charCodeAt(5) is: " + str.charCodeAt(5));