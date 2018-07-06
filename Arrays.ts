var alphas:string[];
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);

var nums = [1,2,3,3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);


console.log();
var arr_names:number[] = new Array(4);
for (var i = 0; i < arr_names.length; i++){
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}

console.log();
var names:string[] = new Array("Mary", "Tom", "Jack", "Jill")
for(var i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log();
var alpha = ["a", "b", "c"];
var numeric = ["1","2","3"];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric: " + alphaNumeric);

console.log();
function isBigEnough(element, index, array){
    return (element >= 10);
}
var passed = [12,5,8,130,44].every(isBigEnough);
console.log("Test Value: " + passed);

console.log();
var passed2 = [12,5,8,130,44].filter(isBigEnough);
console.log("Teste Value: " + passed2);

console.log();
let num = [7,8,9];
num.forEach( function(value) {
    console.log( value )
});

console.log();
var index = [12,5,8,130,44].indexOf(8);
console.log("Index is: " + index);

console.log();
var arr = new Array("First", "Second", "Third");
var st = arr.join();
console.log("str: " + st);
var st2 = arr.join(",");
console.log("str: " + st2);
var st3 = arr.join(" + ");
console.log("str: " + st3);

console.log();
var index = [12,5,8,130,44].lastIndexOf(8);
console.log("Index is: " + index);