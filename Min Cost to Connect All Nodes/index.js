// Sort connections by cost
// Iterate connections, if union(city1,city2), add cost to ans
// Check if there is only one group of connected component

// Time Complexity: O(N log N)
// Note that Union operation takes constant time when UnionFind is implemented with both path compression and union by rank.
// Space Complexity: O(N)

function minCost(N, edges, newEdges) {
    let n = N;
    let parent = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i
    }

    const find = (i) => {
        if (parent[i] == i) return i;
        return i = find(parent[i])
    }

    const union = (u, v) => {

        let findA = find(u);
        let findB = find(v);

        if (findA !== findB) {
            n--;
            parent[findA] = findB;
        }
    }

    for (let [u, v] of edges) union(u, v);

    //sort it by cost
    newEdges.sort((a, b) => (a[2] - b[2]));

    let minCost = 0;

    for (let [u, v, c] of newEdges) {
        if (find(u) != find(v)) {
            minCost += c;
            union(u, v)
        }

    }

    return n == 1 ? minCost : -1

}






let n = 6, edges = [[1, 4], [4, 5], [2, 3]], newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]];
console.log(minCost(n, edges, newEdges));
