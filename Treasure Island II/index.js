const shortestPath = (grid) => {

    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 'S') queue.push([i, j])
        }
    }

    let count = 0;

    while (queue.length) {

        let len = queue.length;
        count++;

        for (let i = 0; i < len; i++) {
            const [x, y] = queue.shift();

            for (let dir of dirs) {
                const [x1, y1] = [x + dir[0], y + dir[1]];

                if (grid[x1] && grid[x1][y1]) {

                    if (grid[x1][y1] == 'X') {
                        return count;
                    } else if (grid[x1][y1] == 'O') {
                        grid[x1][y1] = "V";
                        queue.push([x1, y1])
                    }
                }
            }
        }

    }

 return -1
}

let a = [['S', 'O', 'O', 'S', 'S'],
['D', 'O', 'D', 'O', 'D'],
['O', 'O', 'O', 'O', 'X'],
['X', 'D', 'D', 'O', 'O'],
['X', 'D', 'D', 'D', 'O']]
console.log(shortestPath(a))