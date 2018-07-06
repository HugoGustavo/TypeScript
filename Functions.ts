function test(){
    console.log("function called");
}
test();

function greet():string{
    return "Hello World";
}

function caller(){
    var msg = greet();
    console.log(msg);
}

caller();

function test_param(n1:number, s1:string){
    console.log(n1);
    console.log(s1);
}
test_param(123, "this is a string");

function disp_details(id:number, name:string, mail_id?:string){
    console.log("ID: ", id);
    console.log("Name: ", name);
    if ( mail_id != undefined )
        console.log("Email Id: ", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");

function addNumbers(...nums:number[]){
    var i;
    var sum:number = 0;
    for(i = 0; i < nums.length; i++)
        sum = sum + nums[i];
    console.log("Sum of the numbers ", sum);
}
addNumbers(1,2,3);
addNumbers(10,10,10,10,10,10);


function calculate_discount(price:number, rate:number=0.5){
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);

var msg = function(){
    return "Hello World";
}

console.log(msg());

var res = function(a:number, b:number){
    return a * b;
}
console.log(res(12,2));

var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4,3);
console.log('X = ' + x);

function factorial(number){
    if ( number <= 0 ){
        return 1;
    } else {
        return ( number * factorial(number - 1));
    }
};
console.log('Recursive Factorial: ' + factorial(6));

var foo = ( x:number) => 10 + x;
console.log("Foo: " + foo(100));

var foo2 = (x:number) => {
    x = 10 + x;
    console.log('Foo multiple lines: ' + x);
}
foo2(100);

var func = (x) => {
    if ( typeof x == "number"){
        console.log(x + " is numeric");
    } else if ( typeof x == "string" ){
        console.log(x + " is a string");
    }
}
func(12);
func("Tom");

var display = x => {
    console.log("The function got " + x);
}
display(12);

(function() {
    var x = "Hello!!";
    console.log(x);
})() // the function invokes itself using a pair of parentheses ()


function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any, y?:any):void{
    console.log(x);
    console.log(y);
}

disp("abc");
disp(1, "xyz");

