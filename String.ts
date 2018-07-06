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

var str1 = new String("This is string one");
var str2 = str1.concat("This is string two");
console.log("str1 + str2: " + str2);

str1 = new String("This is string one");
var index = str1.indexOf("string");
console.log("indexIf found string: " + index);
var index = str1.indexOf("one");
console.log("indexOf found String: " + index);

var str1 = new String("This is string one and again string");
var index = str1.lastIndexOf("string");
console.log("lastIndexOf found String: " + index);
index = str1.lastIndexOf("one");
console.log("lastIndexOf found String: " + index);

var str1 = new String("This is beautifiul string");
var index = str1.localeCompare("This is beautifiul string");
console.log("localeCompare first: " + index);

var re = /apples/gi;
var str2 = "Apples are round, and apples are juicy";
if ( str2.search(re) == -1 ){
    console.log("Does not contain Apples");
} else {
    console.log("Contains Apples");
}

var str3 = "Apples are round, and apples are juicy.";
var sliced = str3.slice(3, -2);
console.log(sliced);


var str3 = "Apples are round, and apples are juicy.";
var splitted = str3.split(" ");
console.log(splitted);


var str4 = "Apples are round, and apples are juicy.";
console.log("(1,2)  : " + str4.substr(1,2));
console.log("(-2,2) : " + str4.substr(-2,2));
console.log("(1)    : " + str4.substr(1));
console.log("(-20,2): " + str4.substr(-20,2));
console.log("(20,2) : " + str4.substr(20,2));

var str5 = "Apples are round, and apples are juicy.";
console.log("(1,2) : " + str5.substring(1,2));
console.log("(0,10): " + str5.substring(0,10));
console.log("(5)   : " + str5.substring(5));

var str6 = "Apples are round, and Apples are Juicy.";
console.log(str6.toLocaleLowerCase());

var str7 = "Apples are round, and Apples are Juicy.";
console.log(str7.toLocaleUpperCase());

var str8 = "Apples are round, and Apples are Juicy.";
console.log(str8.toLowerCase());


var str9 = "Apples are round, and Apples are Juicy.";
console.log(str9.toString());

var str10 = "Apples are round, and Apples are Juicy.";
console.log(str10.toUpperCase());

var str11 = new String("Hello World");
console.log(str11.length);