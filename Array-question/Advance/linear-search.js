let arr = [9,7,4,3,4,2];
let target = 0;
let index = -1;
for(let i=0; i<arr.length-1; i++){
    if(arr[i]==target){
       index = i;
       break
    }
}
if(index == -1) console.log("element not found");
else console.log("Element are found",index);