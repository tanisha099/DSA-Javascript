/*
const prompt = require('prompt-sync')(); //"terminal pe show krne ke liye prompt"
let number = prompt("Enter a number: ");
process.stdout.write(number);
*/

// Pattern question
/*
// question-1
 let prompt = require('prompt-sync')(); 
let number = Number(prompt("Enter a number: "));
for(let i=1; i<number; i++ ){
  process.stdout.write("*");  
}
  */

//second question
/*
 let prompt = require('prompt-sync')(); 
let number = Number(prompt("Enter a number: "));
for(let i=1; i<=number; i++ ){
    for(let j=1; j<=number; j++){
process.stdout.write("*");
    }
    console.log();
}
    */

//Right Angle traingle
/*
*
**
***
****
*/
/*
 let prompt = require('prompt-sync')(); 
let number = Number(prompt("enter the number"));
for(let i=1; i<=number; i++ ){
    for(let j=1; j<=i; j++){
process.stdout.write("*");
    }
    console.log();
}
    */

//Number Angle traingle
/*
1
12
123
1234
*/
/*
 let prompt = require('prompt-sync')(); 
let number = Number(prompt("enter the number"));
for(let i=1; i<=number; i++ ){
    for(let j=1; j<=i; j++){
process.stdout.write(j+"");
    }
    console.log();
}
*/
//Alphabhet Angle traingle
/*
A
AB
ABC
ABCD
*/
 let prompt = require('prompt-sync')(); 
let number = Number(prompt("enter the number"));
for(let i=1; i<=number; i++ ){
  let ascii =65;
    for(let j=1; j<=i; j++){
process.stdout.write(String.fromCharCode(ascii)+"");
ascii++;
    }
    console.log();
}