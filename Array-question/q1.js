// Array 
/*
arr.push(val) -> insert at last
arr.pop() -> delete at last
arr.unshift(val) -> insert at first
arr.shift() -> delete at first
*/
/*
//sum of array
let arr = [10,20,30,40,500];
let sum =0;
for( let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);
*/
/*
// max value find 

let arr = [30,20,50,60,90,200];
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log(max);
*/
/*
// min value find 

let arr = [30,20,50,60,90,20];
let min = arr[0];
for(let i=1; i<arr.length; i++){
    if(min>arr[i]){
        min = arr[i];
    }
}
console.log(min);
*/
/*
// second max value

let arr = [200,100,100,90,90,200];
let first = Math.max(arr[0],arr[1]);
let Second = Math.min(arr[0],arr[1]);
for(let i=2; i<arr.length; i++){
    if(first<arr[i]){
        Second = first;
        first = arr[i];
    }
    else if (Second<arr[i] && first != arr[i]){
        Second = arr[i];
    }
}
console.log(Second);
*/



