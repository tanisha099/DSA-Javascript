 
 /*//check-if-the-sentence-is-pangram -> all alphabet ane chaiye dublicate chalega
let sentence = "thequickbrownfoxjumpsoverthelazydog"
var checkIfPangram = function(sentence) {
    let set =new Set ();
    for(let i=0; i<sentence.length; i++){
        let ch = sentence.charAt(i);
        set.add(ch);
    }
    return set.size === 26 //false
};
*/
// 
let jewels = "aA";
let stones = "aAAbbbb";

var numJewelsInStones = function(jewels, stones) {
    let set = new Set();
    for(let i=0; i<jewels.length; i++){
        set.add(jewels.charAt(i));
    }
    count =0;
    for(let i=0; i<stones.length; i++){
        let ch = stones.charAt(i);
        if(set.has(ch)) count++;
    }
    return count
}