//prints each character on a new line
/*
let s = "MYNameis";
for(let i=0; i<s.length; i++){
    console.log(s[i]);
}*/
//reverse string
/*
let s ="DataScience";
let reverse = "";
for(let i=s.length-1; i>=0; i-- ){
    reverse = reverse + s[i]; // s.charAt(i) 
}
console.log(reverse)
*/
// pallindromic string using two pointer algo
/*
// only char and number not include special character
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      console.log("invalid");
      return false;
    }
    left++;
    right--;
  }

  console.log("valid");
  return true;
}

const s = "abcceba";
isPalindrome(s); // prints "invalid"

*/
/*
// ASCII-charCodeAt method
function isAlphanumeric(c) {
  const code = c.charCodeAt(0);
  // 0‑9 → ASCII 48–57, A‑Z → 65–90, a‑z → 97–122
  return (code >= 48 && code <= 57) || 
         (code >= 65 && code <= 90) || 
         (code >= 97 && code <= 122);
}
*/
/*
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    const isAlphanumeric = (c) => {
        return /^[A-Za-z0-9]$/.test(c);
    };

    while (left < right) {
        // Move left pointer to next alphanumeric
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move right pointer to previous alphanumeric
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        // If both are alphanumeric, compare lowercase
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
*/