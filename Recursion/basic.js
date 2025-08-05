// Recursion means iik function bar apne apko ko hii call krta jab tak base condition nhi milte
// n times hello world print krna hai
/* 
let n = 20;
temp(n)
function temp(a){
    if(a==0) return
    console.log("hello world");
    temp(a-1);
}
*/
let n = 10; 

temp(n)
function temp(a){
    if(a==0) return 
    console.log(a)
    temp(a-1);
}
