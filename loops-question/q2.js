/*
// sum of digits
let n = 453;

let sum = 0;
while(n>0){
    let rem = n%10;
    sum= sum + rem;
    n = Math.floor(n/10);
}
console.log(sum);
*/
/*
// reverse of number
let n = 459;
let reverse = 0;
while(n>0){
    let rem = n%10;  // 45%10 = 5(remainder)
    reverse = (reverse*10)+rem ; // 0*10 + 5 = 5
     n = Math.floor(n/10);   // 4.5 = 4
}
console.log(reverse); 
*/

// Automorphic Number

let n = 76;
let copy = n; //76
let sq = n*n;//5776

let count =0;//2
while(n>0){
    count++; // 1
    n = Math.floor(n/10);
}
if(sq%Math.pow(10,count)==copy) console.log("Automorphic number");
else console.log("no automorphic number");