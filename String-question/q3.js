/* All Character
for(let i=1; i<=122; i++){
    process.stdout.write(String.fromCharCode(i)+" ")
} */
/*
//how many times repeact character 
let s = "abcdasaa";
let freqArr = new Array(123).fill(0);
for(let i=0; i<s.length; i++){
    let ascii = s.charCodeAt(i);
    freqArr[ascii] = freqArr[ascii]+1;

}
for(let i=0;i<freqArr.length; i++){
    if(freqArr[i]>0){
        console.log(String.fromCharCode(i)+"-> "+freqArr[i])
    }
}
    */

// anagram
let s1 = "abcdeees";
let s2 = "seeedcba";
let freqArr = new Array(123).fill(0);
if(s1.length != s2.length){
    console.log("Given strings are not anagram");
}else{
    let isAnagram = true;
    for(let i=0; i<s1.length; i++){
        let ascii = s1.charCodeAt(i);
        freqArr[ascii] = freqArr[ascii]+1;
    }
     for(let i=0; i<s2.length; i++){
        let ascii = s2.charCodeAt(i);
        freqArr[ascii] = freqArr[ascii]-1;
    }
    for(let i=0; i<freqArr.length; i++){
        if(freqArr[i]!=0){
            isAnagram= false;
            break
        }
    }
    if (isAnagram)console.log("Given strings are  anagram");
    else console.log("Given strings are not anagram");
}