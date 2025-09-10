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
/*
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
// new apporoch
/*
reverse method use krege isme 
let [1,2,3,4,5] , k=2
ans = [3,4,5,1,2] basically reverse krna 
first traversal i=0 j=k-1, means o index se 1 index tak chalega
[2,1,3,4,5]
second i=k, j=arr.length-1 means 2 se arrki length-1 tak chalega
[2,1,5,4,3]
third i=0, j=l-1;
third i=0 se j=arr.length-1  tak chalega
let arr = [1,3,4,5,6];
let k =2;
k = k%arr.length;
reverse(arr,0, k-1)
reverse(arr,k, arr.length-1)
reverse(arr,0, arr.length-1)
console.log(arr);
function reverse(arr,i,j){
  while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++;
    j--;
  }
}
*/
// Rigth k rotation
/*reverse method use krege isme 
let [1,2,3,4,5] , k=2
ans = [3,4,5,1,2] basically reverse krna 
first traversal i=0 j=arr.length-1, 
second i=0, j=k-1 
third i=k, j=l-1;
 tak chalega
 //code
 let arr = [1,3,4,5,6];
let k =2;
k = k%arr.length;
reverse(arr,0, arr.length-1)
reverse(arr,0, k-1)
reverse(arr,k, arr.length-1)
console.log(arr);

function reverse(arr,i,j){
  while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++;
    j--;
  }
}
*/
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