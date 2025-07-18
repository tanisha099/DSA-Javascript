// reverse array 
let arr = [9,7,3,5,2];
let k = 2;
reverse (0 , k-1)
function reverse (i,j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
}
console.log(arr);