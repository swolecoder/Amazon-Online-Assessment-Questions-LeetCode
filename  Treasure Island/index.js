const treasureIsland = (grid) => {

    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let queue = [[0, 0]];

    let count = 0;
    while (queue.length) {
        let len = queue.length;
        count++;
        for (let i = 0; i < len; i++) {
            let [x, y] = queue.shift();
            for (let j = 0; j < 4; j++) {
                let [x1, y1] = [x + dirs[j][0], y + dirs[j][1]];

                if (grid[x1] && grid[x1][y1]) {
                    if (grid[x1][y1] == 'X') {
                        return count;
                    } else if (grid[x1][y1] == 'O') {
                        grid[x1][y1] = 'D';
                        queue.push([x1, y1])
                    }
                }
            }
        }
    }
    return -1;

}

let a = [['O', 'O', 'O', 'O'],
['D', 'O', 'D', 'O'],
['O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O']];
console.log(treasureIsland(a))