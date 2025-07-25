// String 
let s = "helloworld"
//length 
console.log(s.length);
// substring
console.log(s.substring(4)) // ik index doge tho jo number waha start hoke ebd tak jayega
console.log(s.substring(4,8))// start value end value tak chalega
// slice 
console.log(s.slice(-5)); // ye substring ki tarah kam krte bs ik difference hai ki hum negative me bhi value de sakte hai 
console.log(s.slice(-5,-1));
// Lowercase & Uppercase
console.log(s.toLowerCase());
console.log(s.toLocaleUpperCase());
// Concat -> add krta sabka ko phele wali string or baad wali string ko paragraph ki tarah deta hai
console.log(s.concat(" or ","kaise ","ho"));