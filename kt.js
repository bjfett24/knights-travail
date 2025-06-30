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


function knightMoves(start, end) {
    const graph = generateGraph();
    const queue = [];
    queue.push([start, 0, null]);
    const visited = new Array(8).fill(null).map(() => new Array(8).fill(false));
    visited[start[0]][start[1]] = true;

    const pathParents = new Array(8).fill(null).map(() => new Array(8).fill(null));


    while (queue.length > 0) {
        const [currentPos, currentMoves, parentPos] = queue.shift();
        const [currentX, currentY] = currentPos;

        if (parentPos != null) {
            pathParents[currentX][currentY] = parentPos;
        }


        if (currentX === end[0] && currentY === end[1]) {
            console.log('You have found the shortest path!');
            const path = [];
            let backtrackPos = end;
            while (backtrackPos !== null) {
                path.unshift(backtrackPos); // Add to the beginning to get the path in correct order
                if (backtrackPos[0] === start[0] && backtrackPos[1] === start[1]) {
                     break;
                }
                backtrackPos = pathParents[backtrackPos[0]][backtrackPos[1]];

            }
            if (path.length > 0 && (path[0][0] !== start[0] || path[0][1] !== start[1])) {
                path.unshift(start);
            }
            const result = {moves: currentMoves, path: path};
            return convertToString(result);
        }

        const neighbors = graph[currentX][currentY];

        for (let neighbor of neighbors) {
            if (neighbor[0] !== null) {
                const [neighborX, neighborY] = neighbor;
                if (!visited[neighborX][neighborY]) {
                    visited[neighborX][neighborY] = true; 
                    queue.push([neighbor, currentMoves + 1, currentPos]); 
                }
            }
        }
    }
   
    throw new Error('Then end is unreachable');

       
}

function convertToString(obj) {
    let pathStr = '';

    for (let item of obj.path) {
        pathStr += `[${item}]\n`;
    }
    
    return `You made it in ${obj.moves} moves! Here's your path:\n${pathStr}`;
}

console.log(knightMoves([0, 0], [7, 7]));