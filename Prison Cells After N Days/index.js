const prisonAfterNDays = function (cells, N) {

    let set = new Set();
    let size = 0;
    let hasSeen = false;
    for (let i = 0; i < N; i++) {
        let nextDayCell = helper(cells);
        console.log(nextDayCell)

        if (!set.has(nextDayCell.join(""))) {
            set.add(nextDayCell.join(""));
            size++
        } else {
            hasSeen = true;
            break
        }
        cells = nextDayCell;
    }

    if (hasSeen) {
        let len = N % size;
        for (let i = 1; i <= len; i++) {
            cells = helper(cells)
        }
    }

    return cells;
}


function helper(arr) {
    let a = new Array(arr.length).fill(0);
    for (let i = 1; i < a.length - 1; i++) {
        if (arr[i - 1] == arr[i + 1]) {
            a[i] = 1
        }
    }

    return a;
}


let cells = [0, 1, 0, 1, 1, 0, 0, 1], N = 7;
console.log(prisonAfterNDays(cells, N))