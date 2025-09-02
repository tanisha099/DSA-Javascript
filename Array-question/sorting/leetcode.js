// color code leetcode 
/*
 var swap = function(nums, i, j){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
var sortColors = function(nums) {
    let i=0, j=0, k=nums.length-1;
  while(i<=k){
    if(nums[i]==0) swap(nums, i++, j++)
    else if (nums[i]==2) swap(nums, i , k--)
    else  i++;
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
// trap water
/*
var trap = function(height) {
    let n = height.length;
    let leftMax = new Array(n);
    let rightMax = new Array(n);
   leftMax[0] = height[0];
   for(let i=1; i<n; i++){
    leftMax[i] = Math.max(leftMax[i-1],height[i])
   }
   rightMax[n-1] = height[n-1];
     for(let i=n-2; i>=0; i--){
    rightMax[i] = Math.max(rightMax[i+1],height[i])
   }
   let ans =0
   for(i=0; i<n; i++){
    ans += Math.min(leftMax[i],rightMax[i]) - height[i]
   }
   return ans ;

};
*/