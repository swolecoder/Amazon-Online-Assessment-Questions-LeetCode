const generateMatrix = function (n) {
    if (n == 0) return [];

    let grid = new Array(n).fill(0).map(() => new Array(n).fill(0));


    let startRow = 0;
    let endRow = grid.length - 1;

    let startColumn = 0;
    let endColumn = grid[0].length - 1;

    let val = 1;


    while (startRow <= endRow && startColumn <= endColumn) {
        for (let i = startColumn; i <= endColumn; i++) {
            grid[startRow][i] = val;
            val++
        }
        startRow++

        for (let i = startRow; i <= endRow; i++) {
            grid[i][endColumn] = val;
            val++
        }
        endColumn--;

        if (endRow >= startRow) {
            for (let i = endColumn; i >= startColumn; i--) {
                grid[endRow][i] = val;
                val++
            }
            endRow--
        }

        if (endColumn >= startColumn) {
            for (let i = endRow; i >= startRow; i--) {
                grid[i][startColumn] = val;
                val++
            }
            startColumn++
        }


    }

    return grid;
}

let a = 3;
console.log(generateMatrix(a))