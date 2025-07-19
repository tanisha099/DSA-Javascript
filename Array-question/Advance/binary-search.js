// Binary search only apply for shorted array
let arr = [20,33.45,65,78,86,90];

if(binarysearch(arr,98)=== -1)console.log("not found");
else console.log("element found");
function binarysearch(arr,target){
let s=0; e=arr.length-1;
while(s<=e){
    let mid = Math.floor((s+e)/2);
    if (arr[mid]==target) return mid
    else if (arr[mid]>target) e = mid -1;
    else s= mid + 1;
}
return -1
}

