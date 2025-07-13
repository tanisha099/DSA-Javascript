// Reverse Array 

// with extra element
/*
let arr = [90,10,30,60,70,80];
let arr2 = new Array(arr.length);
let j=0;
for(let i=arr.length-1; i>=0; i--){
    arr2[j] = arr[i];
    j++;
}
console.log(arr2);
//without var
let arr = [90,10,30,60,70,80];
let i=0, j=arr.length-1;

while(i!=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);
*/
// seperate 0,1
let arr = [0,1,0,0,1,1,0,1,0,1,0,0];
let i=0, j=0;
while(i<arr.length){
    if(arr[i]==0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
    i++
}
console.log(arr);