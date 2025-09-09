// find pivot and sort the array
/*
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

    */
  


       