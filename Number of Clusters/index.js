const numIslands = function (grid) {
    let r = grid.length;
    let c = grid[0].length;
    let count = 0;

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] == 1) {
                count++
                dfs(i, j);

            }
        }
    }

    return count;



    function dfs(i, j) {

        if (i < 0 || j < 0 || i >= r || j >= c || grid[i][j] != 1) {
            return false;
        }

        grid[i][j] = 0;
        dfs(i - 1, j)
        dfs(i + 1, j);
        dfs(i, j - 1)
        dfs(i, j + 1)

    }

}

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

console.log(numIslands(grid))

grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]


console.log(numIslands(grid))