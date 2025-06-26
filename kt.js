[
[
    [[1, 2], [2, 1]], [[2, 0], [2, 2]], [[1, 0], [2, 1]]
],
[
    [[0, 2], [2, 2]], [], [[0, 0], [2, 0]]
],
[
    [[0, 1], [1, 2]], [[0, 0], [0, 2]], [[0, 1], [1, 0]]
]
]

/* for [3, 3]
upRight: [4, 5] -> [+1, +2];
rightUp: [5, 4] -> [+2, +1];

rightDown: [5, 2] -> [+2, -1];
downRight: [4, 1] -> [+1, -2];

downLeft: [2, 1] -> [-1, -2];
leftDown: [1, 2] -> [-2, -1];

leftUp: [1, 4] -> [-2, +1];
upLeft: [2, 5] -> [-1, +2];

*/


function generateGraph() {
    
    const graph = [];
    for (let x = 0; x < 8; x++) {
    graph.push([]);
        for (let y = 0; y < 8; y++) {
            graph[x].push([]);
            if (x + 1 < 8 && y + 2 < 8) {
                graph[x][y].push([x + 1, y + 2]);
            } else {
                graph[x][y].push([null]);
            }
            if (x + 2 < 8 && y + 1 < 8) {
                graph[x][y].push([x + 2, y + 1]);
            } else {
                graph[x][y].push([null]);
            }
            if (x + 2 < 8 && y - 1 >= 0) {
                graph[x][y].push([x + 2, y - 1]);
            } else {
                graph[x][y].push([null]);
            }
            if (x + 1 < 8 && y - 2 >= 0) {
                graph[x][y].push([x + 1, y - 2]);
            } else {
                graph[x][y].push([null]);
            }
            if (x - 1 >= 0 && y - 2 >= 0) {
                graph[x][y].push([x - 1, y - 2]);
            } else {
                graph[x][y].push([null]);
            }
            if (x - 2 >= 0 && y - 1 >= 0) {
                graph[x][y].push([x - 2, y -1]);
            } else {
                graph[x][y].push([null]);
            }
            if (x - 2 >= 0 && y + 1 < 8) {
                graph[x][y].push([x - 2, y + 1]);
            } else {
                graph[x][y].push([null]);
            }
            if (x - 1 >= 0 && y + 2 < 8) {
                graph[x][y].push([x - 1, y + 2]);
            } else {
                graph[x][y].push([null]);
            }
            
        }
    }
    return graph;
}


const graph = generateGraph();

console.log(graph);


