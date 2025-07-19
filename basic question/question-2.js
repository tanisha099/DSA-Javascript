// Swap Methods
// first  (add extra var)

let a=10;
let b=30;
/*let c;
c=a; 
a=b; 
b=c;
console.log("value of a ",a);
console.log("value of b ",b);
*/

// Second Method (without extra var )
/*a = a+b;
b=a-b;
a=a-b;
console.log("value of a ",a);
console.log("value of b ",b);
*/

// Third Method (destructing)
[a,b] =[b,a];
console.log("value of a ",a);
console.log("value of b ",b);