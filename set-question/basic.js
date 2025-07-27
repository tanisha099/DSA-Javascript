// Set =>,unordered sequence, multiple element contain, main duplicate value nhi rakh sakta hai 
let set = new Set();
// add value
set.add(10);
set.add(20);
set.add(20);
set.add(20);
set.add(30);
set.add(40);
set.add(30);
set.add(30);
console.log(set);
//delete set
set.delete(30);
console.log(set);
// has -> search krta element hoha tho true , else false
console.log(set.has(30));
console.log(set.has(40));
// length -> Size
console.log(set.size);
// traverse each item 
for(let a of set){
    process.stdout.write(a+" ");
    process.stdout.write(a*2+" ");
}