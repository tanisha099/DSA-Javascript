let a = 10;
let b = 20;
// addition and concat
console.log("sum of 10 and 20 is " + a +b)
console.log("sum of 10 and 20 is " + (a +b))
// type coercion
console.log("1"+1); //11
console.log("1"-1); //0
console.log("1"*1); //1
console.log("1"/1); //1

// accept and print this answer
let age = prompt("what is your age");
age = Number(age);
console.log(typeof age);