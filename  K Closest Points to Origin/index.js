/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let result = [];

    for (let [a, b] of points) {
        let distance = Math.sqrt(a ** 2 + b ** 2);
        result.push({ points: [a, b], distance })
    }

    result.sort((a, b) => a.distance - b.distance);

    let index = 0;

    let returnPoints = [];

    while (index < K) {
        returnPoints.push(result[index].points)
        index++
    }

    return returnPoints;
};