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

console.log();
var numbers = [1,4,9];
var roots = numbers.map(Math.sqrt);
console.log("Roots is: " + roots);

console.log();
var numbers = [1,4,9];
var element = numbers.pop();
console.log("Element is: " + element);
var element = numbers.pop();
console.log("Element is: " + element);

console.log();
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("New numbers is: " + numbers);
length = numbers.push(20);
console.log("New numbers is: " + numbers);

console.log();
var total = [0,1,2,3].reduce(function(a,b){ return a + b; });
console.log("Total is: " + total);

console.log();
var total = [0,1,2,3].reduceRight( function(a,b) { return a+b; });
console.log("Total is: " + total);

console.log();
var arr1 = [0,1,2,3].reverse();
console.log("Reversed array is: " + arr1);

console.log();
var arr2 = [10,1,2,3].shift();
console.log("Shifted value is: " + arr2);

console.log();
var arr3 = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice(1,2): " + arr3.slice(1,2));
console.log("arr.slice(1,3): " + arr3.slice(1,3));

console.log();
var retval = [2,5,8,1,4].some(isBigEnough);
console.log("Returned value is: " + retval);
var retval = [12,5,8,1,4].some(isBigEnough);
console.log("Returned value is: " + retval);

console.log();
var arr4 = new Array("orange", "mango", "banana", "sugar");
var sorted = arr4.sort();
console.log("Returned string is: " + sorted);

console.log();
var arr5 = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr5.splice(2,0,"water");
console.log("After adding 1: " + arr5);
console.log("Removed is: " + removed);
removed = arr5.splice(3,1);
console.log("After removing 1: " + arr5);
console.log("Removed is: " + removed);

console.log();
var arr6 = new Array("orange", "mango", "banana", "sugar");
var str6 = arr6.toString();
console.log("Returned string is: " + str6);

console.log();
var arr7 = new Array("orange", "mango", "banana", "sugar");
var length = arr7.unshift("water");
console.log("Returned array is: " + arr7);
console.log("Length of the array is: " + length);

console.log();
var arr8:number[] = [12,13];
var [x,y] = arr8;
console.log(x);
console.log(y);

console.log();
var j : any;
var nums:number[] = [1001,1002,1003,1004];
for (j in nums ){
    console.log(nums[j]);
}

console.log();
var multi:number[][] = [[1,2,3],[23,24,25]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);

console.log();
var names:string[] = new Array("Mary", "Tom", "Jack", "Jill");
function disp(arr_names:string[]){
    for (var i = 0; i < arr_names.length; i++){
        console.log(names[i]);
    }
}
disp(names);

console.log();
function disp2():string[]{
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var nums2:string[] = disp2();
for (j in nums2){
    console.log(nums2[j]);
}