/*
// leetcode 69 problem sqrt(x)
var mySqrt = function(x) {
    let i=1;
    for(;i*i<=x; i++){
        if(i*i==x) return i
    }
    return i-1
};
*/
/*
//leetcode 50 pow(x,n)
var myPow = function(x, n) {
    if(n==0) return 1.0
    return n<0? 1/temp(x,n) : temp(x,n)
};
var temp = function(x,n){
    if(n==0) return 1;
    let ans = temp(x, parseInt(n/2))
    if(n%2==0) return ans*ans
    return ans*ans*x;
}
    */
