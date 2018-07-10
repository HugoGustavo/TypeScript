var mytuple = [10, "Hello"];
mytuple = [];
mytuple[0] = 120;
mytuple[1] = 234;

mytuple = [10, "Hello"];
console.log(mytuple[0]);
console.log(mytuple[1]);

console.log();
var tup = [];
tup[0] = 12;
tup[1] = 23;
console.log(tup[0]);
console.log(tup[1]);

console.log();
mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length);

mytuple.push(12);
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple");
console.log("Items after pop " + mytuple.length);