function minHours(grid) {
    //Note zombie 1 or a human 0
    //initalize
    let hours = 0;
    let totalNumberOfHumans = 0;
    let zombie = []; // keey a track to cordinates of zombies
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]; // move in four directions

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                totalNumberOfHumans++
            } else if (grid[i][j] === 1) {
                zombie.push([i, j])
            }

        }
    }

    while (totalNumberOfHumans && zombie.length) {
        let turnignJombie = [];

        while (zombie.length) {
            let [x, y] = zombie.shift();
            //look into four directions
            for (let i = 0; i < 4; i++) {
                let [x1, y1] = [x + dirs[i][0], y + dirs[i][1]];
                // check if it is not out of bound
                if (grid[x1] && grid[x1][y1] == 0) {
                    if (grid[x1][y1] == 0) {
                        grid[x1][y1] = 1
                        totalNumberOfHumans--;
                        turnignJombie.push([x1, y1])
                    }
                }

            }
        }

        zombie = turnignJombie;
        hours++
    }

    return totalNumberOfHumans ? -1 : hours;
}

let a = [[0, 1, 1, 0, 1],
[0, 1, 0, 1, 0],
[0, 0, 0, 0, 1],
[0, 1, 0, 0, 0]];
console.log(minHours(a))