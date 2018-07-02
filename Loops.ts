var num:number = 5;
var i:number;
var factorial = 1;

for(i = num; i >= 1; i--){
    factorial *=i;
}

console.log(factorial);

var j:any;
var n:any = "a b c";
for (j in n){
    console.log(n[j]);
}

num = 5;
factorial = 1;
while(num >= 1){
    factorial =  factorial * num;
    num--;
}
console.log("The factorial is " + factorial);

num = 10;
do {
    console.log(num);
    num--;
} while ( num >= 0 );

var i:number = 1;
while ( i <= 10 ){
    if ( i % 5 == 0){
        console.log("The first multiple of 5 between 1 and 10 is: " + i);
        break;
    }
    i++;
}

num = 0;
var count:number = 0;
for ( num=0; num <=20; num++){
    if ( num % 2 == 0 )
        continue;
    count++;
}
console.log("The count of odd values between 0 and 20 is: " + count);