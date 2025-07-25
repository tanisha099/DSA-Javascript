/*
let arr = [[1,2,3,4],[9,6,4,3],[8,4,3,2],[5,4,3,2]];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        process.stdout.write(`${arr[i][j]}`)
    }
    console.log();
}
    */
   /*
// user input for multiply dimentional array
let prompt = require("prompt-sync")()
let size = Number(prompt("Enter inner array"))
let arr = new Array(size)
for(let i=0; i<arr.length; i++){
    arr[i] = new Array(4);3
    
}
for(let i=0; i<arr.length; i++ ){
    for(let j=0; j<arr[i].length; j++){
        arr[i][j] = Number(prompt("Enter inner value of array"))
    }
}
console.log(arr);
*/

//sum of  Diagonal 
let arr = [
    [1,3,2],
    [1,4,2],
    [1,3,9]
]
let leftSum = 0 , rightsum =0
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(i==j) leftSum += arr[i][j]
        if(i+j == arr.length-1) rightsum += arr[i][j]
    }
}
console.log("left sum"+ leftSum);
console.log("right sum"+ rightsum);

// one for 2d array 
let arr1 = Array.from({length:3},()=>Array(4).fill(1))
console.log(arr1)