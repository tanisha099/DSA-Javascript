/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let result = [];
    let total = m*n
    let minrow =0 , maxrow=m-1 , mincol= 0 , maxcol= n-1;
    while(result.length<total){
          for(let col=mincol; col<maxcol && result.length<total; col++){
          result.push(matrix[minrow][col]); 
          }
           minrow ++;
            for(let row=mincol; row<=maxrow && result.length<total; row++){
          result.push(matrix[row][maxcol]); 
          }
           maxcol --;
            for(let col=maxcol; col>=mincol && result.length<total; col--){
          result.push(matrix[maxrow][col]); 
          }
           maxrow --;
            for(let row=maxrow; row>=minrow && result.length<total; row--){
          result.push(matrix[row][mincol]); 
          }
           mincol ++;
           

    }
    return result
};
*/
//Mycode
/*
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let result = [];
    let total = m*n
    let minrow =0 , maxrow=m-1 , mincol= 0 , maxcol= n-1;
    while(result.length<total){
          for(let col=mincol; col<maxcol && result.length<total; col++){
          result.push(matrix[minrow][col]); 
          }
           minrow ++;
            for(let row=mincol; row<=maxrow && result.length<total; row++){
          result.push(matrix[row][maxcol]); 
          }
           maxcol --;
            for(let col=maxcol; col>=mincol && result.length<total; col--){
          result.push(matrix[maxrow][col]); 
          }
           maxrow --;
            for(let row=maxrow; row>=minrow && result.length<total; row--){
          result.push(matrix[row][mincol]); 
          }
           mincol ++;
           

    }
    return result
};
*/