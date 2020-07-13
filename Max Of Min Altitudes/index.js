/**
 * @param {number[][]} grid
 * @return {number}
 */

 //DP O(mn) time and O(1) space
var minPathSum = function (grid) {

    grid[grid.length - 1][grid[0].length - 1] = Infinity;//to avoid arbitrary if checks because the last point must be excluded

    for (let i = 2; i < grid[0].length; i++) {
        grid[0][i] = Math.min(grid[0][i], grid[0][i - 1])
    }

    for (let i = 2; i < grid.length; i++) {
        grid[i][0] = Math.min(grid[i][0], grid[i - 1][0])
    }


    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            grid[i][j] = Math.min(grid[i][j], Math.max(grid[i - 1][j], grid[i][j - 1]))
        }
    }

    return grid[grid.length - 1][grid[0].length - 1]
};

let a = [[5, 1],
[4, 5]];
console.log(minPathSum(a))

a =[[1, 2, 3],
[4, 5, 1]];
console.log(minPathSum(a))