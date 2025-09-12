//Allocate Minimum No of Pages (Geeks of Geeks)
 var isValid = function(arr, upperLimit, k){
     let count = 1 , sum =0;
     for(let i=0; i<arr.length; i++){
         if(arr[i] + sum >upperLimit){
             count ++;
             sum = arr[i];
             if(count > k) return false
         }else sum += arr[i]
     }
     return true
 }

class Solution {
    findPages(arr, k) {
        // code here
        if(k>arr.length) return -1;
        let first =0, last =0, ans = -1;
        for(let i=0; i<arr.length; i++){
            last += arr[i]
            first = Math.max(arr[i], first)
        }
        while(first<=last){
            let mid = Math.floor((first+last)/2)
            if(isValid(arr,mid,k)){
                ans = mid;
                last = mid-1;
                
            }else first = mid + 1
        }

        return ans
    }
}