var val:string | number;
val = 12;
console.log("Numeric value of val " + val);
val = "This is a string";
console.log("String value of val " + val);

console.log();
function disp(name:string|string[]){
    if ( typeof name == "string" ){
        console.log(name);
    } else {
        var i;
        for (i = 0; i < name.length; i++){
            console.log(name[i]);
        }
    }
}
disp("mark");
console.log("Printing names array .... ");
disp(["Mark", "Tom", "Mary", "John"]);


console.log();
var arr:number[] | string[];
var i:number;
arr = [1,2,4];
console.log("**numeric array**");
for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");

for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}