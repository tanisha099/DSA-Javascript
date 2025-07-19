// Operators 

//arithmetic operator -> +,-,*,/,%
/*
let a=119;
let b= 2;
console.log(Math.floor(a/b));
console.log(a%b); // remainder (mode)

//remove last digit 
console.log(Math.floor(a/10));
*/

//Relational operator -> >,<,>=,<=,!==,=,==,===
/*
console.log(10<9); //false
console.log(10>9); // true
console.log(9<=9); // true
console.log(10>=9);//true
console.log(10!=9);//true
console.log(a=10); // asign value
console.log(10==10) // equality cheak 
console.log(10==="10") // value and datatype cheak
*/
// logical operator -> && , ||
console.log(10>6 && 14>9); // right and left dono condition cheak krta h dono true hogi tabhi true ayega
console.log(10<8 || 12<8); // done me ik true hai true hoga aur dono false h tho false ayega


//unary operator ++(increment) , -- (decrement)
// increment -> pre ++a(phele increment karo phir use karo ) , post a++(phele use karo phir increment karo)
// decrement -> pre --a(phele decrement karo phir use karo ) , post a--(phele use karo phir decrement karo)
/* let i =11;
 i = i++ + ++i; 
 console.log(i);

 // only javascript boolen value use
 let b=true; // true->1,false->0
 b++
 console.log(b);

 // error 
 /*
 let c = 11++;
 console.log(c);

let c=11;
console.log(++c);
 */
// question 
/*
let a=11, b=22, c;
c = a +b + a++ + b++ + ++a + ++b;
console.log("a=" +a);
console.log("b=" +b);
console.log("c=" + c);
*/
// question
/*
let i = 0;
i = i++ - --i + ++i - i--;
console.log(i);

// question
let b = true;
b++;
console.log(b);
*/
/*
// complex inc and dec 
let i = 1, j = 2, k = 3;
let m = i-- - j-- - k--;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
console.log("m=" + m);

// question
let a = 1, b = 2;
console.log(--b - ++a + ++b - --a);
*/
//Syntax Errors and Logical Issues
/*
let i = 11;
let j = --(i++); // invalid
*/
let m = 0, n = 0;
let p = --m * --n * n-- * m--;
console.log(p);
// ques
/*
let a = 1;
a = a++ + ++a * --a - a--; // * multiple hoga 
console.log(a); //5
*/

// ques
/*
let a = 11++; //invalid
console.log(a);
*/

//ques
let i = 0, j = 0;
console.log(--i * i++ * ++j * j++);
