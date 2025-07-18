/*
// left rotation by 1 element
let arr = [1,3,4,5,6];
 top = arr[0];
 console.log(top);

 for (let i=0; i<arr.length-1; i++){
    arr[i]= arr[i+1];
 }
  arr[arr.length-1] = top;
console.log(arr);
*/
/*
// right rotation by 1 element
let arr = [1,3,4,5,6];
 first = arr[arr.length-1];
 console.log(first);

 for (let i=arr.length-1; i>0; i--){
  arr[i] = arr[i-1];
 }
  arr[0] = first;
console.log(arr);
*/
/*
// left rotation by k element
let arr = [1,3,4,5,6];
let k =4;
for(j=1; j<=k; j++){
  let top = arr[0];
   console.log(top);
   // console.log(k);
   for (let i=0; i<arr.length-1; i++){
    arr[i]= arr[i+1];
 }
 arr[arr.length-1] = top;
}

console.log(arr);
*/