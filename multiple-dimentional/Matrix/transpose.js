// Transpose Matrix

let matrix = [
  [1, 3, 2],
  [1, 4, 2], 
];

let ans = Array.from({ length: matrix[0].length }, () => []); // initialize inner arrays

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    ans[j][i] = matrix[i][j]; // swap rows and columns
  }
}

console.log(ans);