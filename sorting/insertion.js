/*Array: [5, 2, 4, 6, 1]

🔹 Step 1: First element ko sorted maan lo
[5] ← sorted

Ab second element uthao

🔹 Step 2: 2 uthao
Compare 2 with 5

2 < 5 → shift 5 to right

Insert 2 at index 0

🔸 Result: [2, 5, 4, 6, 1]

🔹 Step 3: 4 uthao
Compare 4 with 5 → 4 < 5 → shift 5

Compare 4 with 2 → 4 > 2 → yahi insert karo

🔸 Result: [2, 4, 5, 6, 1]

🔹 Step 4: 6 uthao
Compare with 5 → 6 > 5 → already sahi jagah pe hai

🔸 Result: [2, 4, 5, 6, 1]

🔹 Step 5: 1 uthao
Compare with 6, 5, 4, 2 → sabse chhota hai

Sabko shift karo right side

Insert 1 at index 0

🔸 Result: [1, 2, 4, 5, 6]

🔸 Final Sorted Array:
✅ [1, 2, 4, 5, 6]
*/
let arr = [5, 2, 4, 6, 1]
for(let i=1; i<arr.length; i++){
    let key = arr[i]
    let j = i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j] //shift
        j--
    }
    arr[j+1] = key; //insert
}
console.log(arr);