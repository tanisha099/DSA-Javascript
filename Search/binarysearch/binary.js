/*
// leetcode problem Search in Rotated Sorted Array
var search = function(nums, target) {
    let first = 0 ;
    let last = nums.length-1;
   while(first<=last){
    mid = Math.floor((first+last)/2);
    if(nums[mid]== target) return mid;
   if(nums[first]<= nums[mid]){
        if(nums[first]<= target && target<=nums[mid]){
            last = mid
        } else{
            first = mid+1
        }
    }
    else{
        if(nums[mid+1]<=target&& target<=nums[last]){
            first = mid + 1
        }
        else last = mid
    }
   }
return -1;
};
*/
/*
//Peak Index in a Mountain Array
var peakIndexInMountainArray = function(arr) {
    let first =0;
    let last = arr.length-1;
    while(first<last){
        let mid = Math.floor((first+last)/2);
        if(arr[mid]<=arr[mid+1]){
            first = mid+1;
        }
        else{
            last = mid;
        }
    }
    return first
};
*/
/*
//Find First and Last Position of Element in Sorted Array
 var binarySearch = function(nums,target,isStart){
    let first =0,last = nums.length-1, ans = -1;
    while(first<=last){
        let mid = Math.floor((first+last)/2)
        if(nums[mid]== target){
            ans = mid
            if(isStart) last = mid - 1
            else first = mid + 1
        }
        else if(nums[mid]<target) first = mid +1
        else last = mid-1
    }
    return ans
 }
var searchRange = function(nums, target) {
    let start = binarySearch(nums,target,true)
    let end = binarySearch(nums, target,false);
    return[start,end]
};
*/
/*
//Search Insert Position
var searchInsert = function(nums, target) {
    let first = 0; 
    let last = nums.length-1;
    while(first<=last){
        let mid = Math.floor((first + last) / 2);
        if(nums[mid]== target) return mid;
        else if(nums[mid]>target) last = mid -1;
        else first = mid+1;
    }
    return first
};
*/
