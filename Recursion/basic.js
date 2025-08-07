// Recursion means iik function bar apne apko ko hii call krta jab tak base condition nhi milte
// n times hello world print krna hai
/* 
let n = 20;
temp(n)
function temp(a){
    if(a==0) return
    console.log("hello world");
    temp(a-1);
}
*/
/*
//n se 1 tak number print
let n = 10; 

temp(n)
function temp(a){
    if(a==0) return 
    console.log(a)
    temp(a-1);
}
*/
/*
//1 se n tak number print
let n = 10; 

temp(n)
function temp(a){
    if(a==0) return 
    temp(a-1);
     console.log(a)
}
     */
    /*
// sum number 
let n = 2; 

temp(n)
function temp(n){
    if(n==1) return n
    return n + temp(n-1)  // n=2 2+temp(2-1) = 2+1 = 3
}
console.log(temp(n))
*/
/*
// Factorial 
let n = 5; 

temp(n)
function temp(n){
    if(n==1) return n
    return n * temp(n-1)  // n=2 2+temp(2-1) = 2+1 = 3
}
console.log(temp(n))

*/
/*
// fibonanci series 
function fibo(n, first, second){
    if(n==0) return 
    let third = first + second 
    process.stdout.write(third+" ")
    fibo(n-1, second, third)
}
let n=8;
let first =0, second = 1;
process.stdout.write(first+" "+second+" " );
fibo(n-2,first,second)
*/
/*
// sum of number 

let n = 936;

function sum(n){
    if (n<10) return n
     return n%10 + sum(Math.floor(n/10));
}
console.log(sum(n));
*/
// Reverse number
function reverse(n,rev){
    if(n===0) return rev
    return reverse(Math.floor(n/10), rev*10 + (n%10))

}
let n =891;
console.log(reverse(n,0));