//Math function
/*
//Math.round
console.log(Math.round(10.5));//Normal
//Math.ceil
console.log(Math.ceil(10.6));//jo value us upper kr ke hi deta 
//Math.floor
console.log(Math.floor(10.9));// jo value us kam kr ke deta
//Math.trunc
console.log(Math.trunc(10.6)); // point ke baad value remove kr dega-> 10
//Math.pow
console.log(Math.pow(2,3));//give two value first value and sqaure of value
//Math.sqrt
console.log(Math.sqrt(4));// square root
//Math.cbrt
console.log(Math.cbrt(8));// cube root
//Math.abs
console.log(Math.abs(-12));// negative value ko positive me kr dega
//Math.max
console.log(Math.max(2,8,24,6,45,0,1));
//Math.min
console.log(Math.min(2,-8,-24,6,45,1));
//Math.random
console.log((Math.random()*9000)+1000);//Math.random value deta 0 se 1 tak bich->0 to 999 otp generate
*/
/*
// Compund interest
// formula = CI = A - P , A = P*(1 + r/100)^t
let p = 1000 , r=5, t=3;

console.log(p*Math.pow(1 + r/100 , t)-p)

// find area of traingle by heron,s formula
// Herons formula = s*(s-a)*(s-b)*(s-c)
let a = 3;
let b = 4;
let c = 5;

if(a+b <= c || a+c<=b || b+c<=a){
    console.log("not possible");
}
else{
    let s = (a+b+c)/2
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}
*/
// circumference of circle 2*(pi)*r
let r = 9;
console.log(2*Math.PI*r);