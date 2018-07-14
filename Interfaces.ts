interface IPerson {
    firstName: string,
    lastName:string,
    sayHi:()=>string
}

var customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi:():string=> {
        return "Hi There";
    }
}

console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee:IPerson = {
    firstName:"Jim",
    lastName:"Blakes",
    sayHi:():string=>{return "Hello!!!"}
}

console.log("Employee Object");
console.log(employee.firstName);
console.log(employee.lastName);

interface RunOptions {
    program:string;
    commandline:string[]|string|(()=>string);
}

var options:RunOptions = {
    program:"test1",
    commandline:"Hello"
};
console.log(options.commandline);

options = {
    program:"test1",
    commandline:["Hello", "World"]
};
console.log(options.commandline[0]);
console.log(options.commandline[1]);

options = {
    program:"test1",
    commandline: () => {
        return "**Hello World**";
    }
};

var fn:any = options.commandline;
console.log(fn());

interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums"
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);

interface IParent1 {
    v1:number
}

interface IParent2 {
    v2:number
}

interface Child extends IParent1, IParent2 {

}

var Iobj:Child = {
    v1:12,
    v2: 23
}

console.log("Value 1: " + Iobj.v1);
console.log("Value 2: " + Iobj.v2);