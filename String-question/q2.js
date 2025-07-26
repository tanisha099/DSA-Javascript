// Toggle each alphabet of string 
// in - AcgDfD Output - aCGdFd
/*
let s = "AcgDfD";
let ans = " ";
for(let i=0; i<s.length; i++){
    let ascii = s.charCodeAt(i);
    if(ascii>=65 && ascii<=90){
        ans = ans + String.fromCharCode(ascii + 32)
    } else  if(ascii>97 && ascii<=122){
        ans = ans + String.fromCharCode(ascii - 32)
    }
}
console.log(ans);
*/
/*
// compare krna h  kabhi start me s word aye tho uska count krna hai
let word = ["attention", "people","attire","hello","attend"]
let s = "at";
let count =0;
for(let i=0; i<word.length; i++){
    if(word[i].startsWith(s)) count++ ;
}
console.log(count)
*/

// first letter and last letter uppercase
let s = "hello bhai kya haal chaal";
let ans = " ";
let arrStr = s.split(" ");
for(let i=0; i<arrStr.length; i++){
    let word = arrStr[i]
    if(word.length<=2) ans = ans + word.toUpperCase()+" ";
    else{
        ans = ans + word.charAt(0).toUpperCase()
                 +word.substring(1, word.length-1)+ 
                 word.charAt(word.length-1).toUpperCase()+" ";
    }
}
console.log(ans);