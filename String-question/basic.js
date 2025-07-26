// String 
let s = "hello world"
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
// Concatenates -> add krta sabka ko phele wali string or baad wali string ko paragraph ki tarah deta hai
console.log(s.concat(" or ","kaise ","ho"));
//trim -> remove space from both sides
console.log(s.trim());
//indexof(substring)-> Return first index of substring 
console.log(s.indexOf("wor")) //5
//lastIndexof(substring)-> return last index of substring
console.log(s.lastIndexOf("wor"));
//startsWith(substring)-> checks if string start with substring
console.log(s.startsWith("helloworld"));
//endsWuth(substring)->checks if string ends with substring
console.log(s.endsWith());
//replace(old,new)->Replace first occurence of substring
console.log(s.replace("world","Newworld"));
//replaceAll(old,new) -> replace all occurrence
console.log(s.replaceAll("world","Newworld"));
//split 
console.log(s.split(" "));