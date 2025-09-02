/*function conquer(arr,f,m,l){
    let temp = new Array (l-f+1).fill(0)
    let i=f , j=m+1, k=0;
    while(i<=m && j<=l){
        if(arr[i]<arr[j]) temp[k++] = arr[i++]
        else temp[k++] = arr[j++]
    } 
    while(i<=m){
        temp [k++] = arr[i++]
    }
    while(j<=l){
        
        temp[k++] = arr[j++]
    }
    i=f, k=0
    while(k<temp.length){
        arr[i++]= temp[k++]
    }
}
function divide(arr, f, l){
    if(f>=l) return
    let mid = Math.floor((f+l)/2)
    divide (arr,f,mid)
    divide(arr,mid+1,l)
    conquer(arr,f,mid,l)
}
let arr = [10,7,8,2,19,69,45,8]
divide(arr,0,arr.length-1)
console.log(arr);
*/
// find pivot and sort the array
let arr = [18,5,3,40,10,30]
quickSort(arr,0,arr.length-1)
console.log(arr);
function quickSort(arr,first,last){
    if(first>=last) return 
    let pIdx = findPivotIndex(arr,first,last)
    quickSort(arr,first,pIdx-1)
    quickSort(arr,pIdx+1, last)
}
function findPivotIndex(arr, first,last){
let pivot = arr[last]
let i = first -1 ;
for(let j = first; j<last; j++){
    if(arr[j]<pivot){
        i++
        swap (arr, i, j);
    }
}
i++;
swap(arr,i,last)
return i;
}
function swap (arr, i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}