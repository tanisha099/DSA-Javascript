//left Angle traingle
/*
****
***
**
*
*/
/*
 let prompt = require('prompt-sync')(); 
let number = Number(prompt("enter the number"));
for(let i=1; i<=number; i++ ){
    for(let j=1; j<=(number-i)+1; j++){
process.stdout.write("*");
    }
    console.log();
}
*/
// inverted right angle 
/*
   *
  **
 ***
****
*/

 let prompt = require('prompt-sync')(); 
 let number = Number(prompt("enter the number"));
 for(let i=1; i<=number; i++ ){
    //inverted
    for(let j=1; j<=(number-i); j++){
process.stdout.write(" ");
    }
    //right
 for(let j=1; j<=i; j++){
process.stdout.write("*");
    }
    console.log();
}