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
   /*
   // cyclic sorting
   let arr = [8,5,7,2,1,3,4,6];
   let i=0;
   while( i<arr.length){
    let correctIndex = arr[i]-1;
    if(arr[i]!=arr[correctIndex]){
      let temp = arr[i];
    arr[i] = arr[correctIndex];
    arr[correctIndex] = temp
    }
     else i++
   }
     console.log(arr);
  */


       