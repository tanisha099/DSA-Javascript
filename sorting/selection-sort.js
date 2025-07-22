let arr = [9,6,4,3,5,2,1];
let n = arr.length
for(let i=0; i<n-1; i++){
  let  small = i;
    for (let j=i+1; j<n; j++){
        if(arr[small]>arr[j]){
            small =j
        }
    }
    if(i != small){
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
}
console.log(arr);