var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi There";
    }
};
console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee Object");
console.log(employee.firstName);
console.log(employee.lastName);
var options = {
    program: "test1",
    commandline: "Hello"
};
console.log(options.commandline);
options = {
    program: "test1",
    commandline: ["Hello", "World"]
};
console.log(options.commandline[0]);
console.log(options.commandline[1]);
options = {
    program: "test1",
    commandline: function () {
        return "**Hello World**";
    }
};
var fn = options.commandline;
console.log(fn());
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);
var Iobj = {
    v1: 12,
    v2: 23
};
console.log("Value 1: " + Iobj.v1);
console.log("Value 2: " + Iobj.v2);
