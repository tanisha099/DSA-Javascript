// HCF
/* 
let a=16, b=24;
for(let i=Math.min(a,b); i>=1; i--){
    if(a%i==0 && b%i==0){
        console.log(i);
        break
    }
}
*/
/*
// short cut method
let a=16, b=24;
while(a!==b){
    if(a<b) b = b-a
    else  a = a-b
}
console.log(a);
*/
// recurtion method se greatest common difference
let a = 16, b=24;
function gcd(a,b){
    if(a==b) return a
    if(a>b) return gcd(a-b, b)
     return gcd(a,b-a)
}
console.log(gcd(a,b));

//ik or method jisme value of half kr rahe h 

function gcd(a,b){
    if(b==0) return a
    return gcd (b,a%b);
}
console.log(gcd(16,24));