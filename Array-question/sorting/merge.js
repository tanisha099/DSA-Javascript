/*
let arr1 = [2,3,5];
let arr2 = [1,4,6,8];

let ans = new Array(arr1.length+arr2.length);
let i=0 , j=0, k=0;

while(i<arr1.length && j<arr2.length){
if(arr1[i]<arr2[j]){
    ans[k++] = arr1[i++]
}
else{
    ans[k++] = arr2[j++]
}
}
while(i<arr1.length){
       ans[k++] = arr1[i++]
}
while(j<arr2.length){
     ans[k++] = arr2[j++]
}

console.log(ans);
*/
/*
//leetcode problem 88 merge sorted array
var merge = function(nums1, m, nums2, n) {
    let i = m-1 , j=n-1, k=nums1.length-1;
    while(i>=0 && j>=0){
     if(nums1[i]>nums2[j]) nums1[k--] = nums1[i--]
    else nums1[k--] = nums2[j--]
    }
    while(j>=0){
   nums1[k--] = nums2[j--] 
}
};
*/
/*
// leetcode problem Maximum Subarray
var maxSubArray = function(nums) {
    let sum = 0, maxsum=nums[0];
    for(i=0; i<nums.length; i++){
       sum = Math.max(nums[i], sum + nums[i]);
        maxsum = Math.max(maxsum, sum);
    }
    return maxsum;
};
*/
/*
// leetcode problem  Majority Element

var majorityElement = function(nums) {
   let count = 1, ans = nums[0];

   for(i=1; i<nums.length; i++){
    if(count == 0){
        ans = nums[i]
        count =1
    }
    else if (ans!= nums[i]) count -- ;
    else count ++
   }
   return ans 
};
*/
// leetcode problem 121
/*
var maxProfit = function(prices) {
    let min=prices[0] , maxprofit=0 ;
    for(i=1; i<prices.length; i++){
     if(prices[i]<min) min = prices[i];
    let profit = prices[i] -min;
    maxprofit = Math.max(maxprofit , profit)
    }
    return maxprofit
};
*/