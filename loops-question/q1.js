// print natural number 
/*
let n = 10;

for(i = 1; i<n; i++){
    console.log(i);
}
    */
/*
// Reverse for loop Print n to 1
let n = 10;

for(i=n; i>=1; i--){
    console.log(i);
}
*/
/*
//sum up to n terms
n = 5;
let sum = 0;
for(i=1; i<=n; i++ ){
    sum = i + sum;
}
console.log(sum);
*/
/*
//factorial 
n = 6;
let factorial = 1 ;
for (i=n; i>=1; i--){
    factorial *=i;
}
console.log(factorial);
*/

//print all the factors of a number
// complete divisible 
/*
n = 20;
for (i=1; i<=n/2; i++){
    if(n%i==0) console.log(i);
}
console.log(n); 
*/

// find prime number

n = 33;
let isPrime = isPrimefun(n);
if(isPrime)console.log("prime number");
else console.log("no prime number");

function isPrimefun(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2 == 0) return false;
    for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
        if(n%i == 0) return false;
    }
    return true;
}
