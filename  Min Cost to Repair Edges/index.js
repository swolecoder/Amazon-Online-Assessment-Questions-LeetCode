function minCost(N, edges, edgesToRepair) {

    let n = N;
    let parent = [];

    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }


    const find = (i) => {
        if (i == parent[i]) return i;
        return i = find(parent[i])
    }

    const union = (u, v) => {
        const findA = find(u);
        const findB = find(v);
        if (findA != findB) {
            parent[findA] = findB;
            n--
        }
    }

    // find same edges
    const hasSameEdges = (edge1, edge2) => {
        const [x, y] = edge1;
        const [x1, y1] = edge2;
        return x == x1 && y == y1
    }

    const isInEdgesToRepair = (e) => {
        for (let edges of edgesToRepair) {
            if (hasSameEdges(edges, e)) {
                return true
            }
        }
        return false;
    }


    for (let edge of edges) {
        if (!isInEdgesToRepair(edge)) {
            const [u, v] = edge;
            union(u, v)
        }
    }


    edgesToRepair.sort((a, b) => a[2] - b[2]);
    let cost = 0;

    for (let [u, v, c] of edgesToRepair) {
        if (find(u) != find(v)) {
            cost += c;
            union(u, v)
        }
    }

    return n== 1 ? cost : -1

}


let n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]];
console.log(minCost(n,edges,edgesToRepair))

n = 6, edges = [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], edgesToRepair = [[1, 6, 410], [2, 4, 800]];
console.log(minCost(n,edges,edgesToRepair));

n = 6, edges = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], edgesToRepair = [[1, 5, 110], [2, 4, 84], [3, 4, 79]]
console.log(minCost(n,edges,edgesToRepair));
