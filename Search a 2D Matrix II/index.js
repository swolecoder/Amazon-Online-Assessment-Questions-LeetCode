/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix.length) return false;


  let c= matrix[0].length-1;
  let r = 0;

 while( r < matrix.length && c >=0){
     if(matrix[r][c] == target){
         return true
     }else if(target >matrix[r][c]){
         r++;
     }else if(target < matrix[r][c]){
         c--
     }
 }

 return false

};

let a = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
console.log(searchMatrix(a,21))