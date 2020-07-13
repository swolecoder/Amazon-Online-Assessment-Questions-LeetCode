/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */


const mod = 1000000007;
let map = new Map();

var numRollsToTarget = function (d, f, target) {

    if (target < d || target > d * f) return 0;

    if (d == 1) return target <= f ? 1 : 0;

    let k = `${d}${f}${target}`;

    if (!map.has(k)) {

        let ways = 0;
        for (let i = 1; i <= f; i++) {
            ways += numRollsToTarget(d - 1, f, target - i);
            ways %= mod
        }

        map.set(k, ways)

    }
    return map.get(k)
};

let d = 1, f = 6, target = 3;
console.log(numRollsToTarget(d, f, target));
d = 2, f = 6, target = 7;
console.log(numRollsToTarget(d, f, target));
d = 2, f = 5, target = 10;
console.log(numRollsToTarget(d, f, target));
d = 30, f = 30, target = 500;
console.log(numRollsToTarget(d, f, target));
