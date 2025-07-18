// do while loop 
/*
let i=6;
do{
    console.log("hello world");
    i++
}while(i<=5);

//reapted hello world 

let userInput;

do{
    console.log("hello world");
    userInput = prompt("you are repeat printed").toLowerCase();
}while(userInput === "yes");
*/

// guess the number
let com = Math.floor(Math.random()*100)+ 1;

let userInput;
do{
    userInput = Number(prompt("Guess the number b/w 1 to 100"))
    if(isNaN(userInput) || userInput<0|| userInput>100){
        console.log("please enter valid number");
        continue
    }
    if(userInput> com)console.log("too high , try again");
    else if(userInput<com) console.log("too low, try again");
    else console.log("Congrats and number was" + com);   
} while(userInput !== com);