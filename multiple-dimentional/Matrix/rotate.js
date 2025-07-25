// Rotate matrix -> transpose nikalo aur phir revrse krdo

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var rotate = function(matrix){
  // Step 1: Transpose the matrix (i < j)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < matrix.length; i++) {
    let left = 0, right = matrix[i].length - 1;
    while (left < right) {
      let temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--;
    }
  }
}

rotate(matrix);
console.log(matrix);
