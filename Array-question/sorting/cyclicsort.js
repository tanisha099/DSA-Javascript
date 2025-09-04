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
 /*
 // missingnumber
 var missingNumber = function(nums) {
    let i=0;
    while(i<nums.length){
        let correctIndex = nums[i];
        if(nums[i]<=nums.length && nums[i]!=nums[correctIndex]){
         let temp = nums[i];
         nums[i] = nums[correctIndex]
         nums[correctIndex] = temp;
        } else i++
    }
    for(let j=0; j<nums.length; j++){
        if(j!=nums[j]) return j
    }
    return nums.length
};
*/

