function solveMaze(maze) {
    const start = [4, 11]; // Starting position
    const end = [10, 0]; // Ending position
    const visited = new Set(); // Set to keep track of visited nodes

    // Recursive DFS function
    function dfs(current) {
        // Mark current node as visited
        visited.add(current.join(','));

        if (current[0] === end[0] && current[1] === end[1]) {
            return true; // Maze solved
        }

        const [x, y] = current;
        const neighbors = getNeighbors(x, y);

        for (const neighbor of neighbors) {
            const [nx, ny] = neighbor;
            const neighborKey = neighbor.join(',');
            if (!visited.has(neighborKey) && maze[nx][ny] !== 0) {
                // Mark visited nodes as 8
                maze[nx][ny] = 8;

                if (dfs(neighbor)) {
                    return true;
                }
                // Mark wrong paths as -8
                maze[nx][ny] = -8;
            }
        }

        return false;
    }

    // Function to get valid neighboring nodes
    function getNeighbors(x, y) {
        const neighbors = [];
        if (x < maze.length - 1) {
            neighbors.push([x + 1, y]); // Down
        }
        if (y > 0) {
            neighbors.push([x, y - 1]); // Left
        }
        if (x > 0) {
            neighbors.push([x - 1, y]); // Up
        }
        if (y < maze[0].length - 1) {
            neighbors.push([x, y + 1]); // Right
        }
        return neighbors;
    }

    // Start DFS from the starting position
    dfs(start);

    // Mark the starting position as 8
    maze[start[0]][start[1]] = 8;

    return maze;
}

// Example 12x12 maze
const maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



let tablee = document.getElementById("maze-table");
let table = document.getElementById("maze-answer");

// Print maze of question
for (const row of maze) {
    const tableRow = document.createElement("tr");
    const tableColumn = document.createElement("td");
    for (const cell of row) {
        const tableCell = document.createElement("td");
        tableCell.textContent = cell.toString();
        if (cell === 0) {
            tableCell.classList.add("wall");
            tableCell.title = "Wall";
        } else if (cell === 1) {
            tableCell.classList.add("path");
            tableCell.title = "Path";
        }
        tableRow.appendChild(tableCell);
    }
    tablee.appendChild(tableRow);
}


const solveButton = document.getElementById("solve");
solveButton.addEventListener("click", () => {
    solveButton.style.opacity = 0;
    setTimeout(() => {
        solveButton.style.display = "none";
    }, 400);
    table.classList.add("active");

    const solvedMaze = solveMaze(maze);
    let delay = 100; // Animation delay (in milliseconds)

    for (let i = 0; i < solvedMaze.length; i++) {
        setTimeout(() => {
            const row = solvedMaze[i];
            const tableRow = document.createElement("tr");
            const tableColumn = document.createElement("td");
            for (const cell of row) {
                const tableCell = document.createElement("td");

                tableCell.textContent = cell.toString();
                if (cell === 0) {
                    tableCell.classList.add("wall");
                    tableCell.title = "Wall";
                } else if (cell === 8) {
                    tableCell.classList.add("correct");
                    tableCell.title = "Correct Path!";
                } else if (cell === -8) {
                    tableCell.classList.add("wrong-path");
                    tableCell.title = "Wrong Path";
                } else if (cell === 1) {
                    tableCell.classList.add("path");
                    tableCell.title = "Path";
                }
                tableRow.appendChild(tableCell);
            }
            table.appendChild(tableRow);
            tableRow.style.animation = "fadeOut 0.3s ease-in-out";
            tableRow.style.animationFillMode = "forwards";
        }, i * delay);
    }
});
let help = Array.from(document.getElementsByTagName("h6"));
help.forEach(element => {
    element.addEventListener("mouseover", () => {

        if (element.textContent.includes("WALL")) {
            Array.from(table.getElementsByClassName("wall"))
                .forEach(e => {
                    e.style.backgroundColor = "#84848471";
            })
            Array.from(tablee.getElementsByClassName("wall"))
                .forEach(e => {
                    e.style.backgroundColor = "#84848471";
            })
        } else if (element.textContent.includes("CORRECT")) {
            Array.from(table.getElementsByClassName("correct"))
                .forEach(e => {
                    e.style.backgroundColor = "#00dd00";
                })
            Array.from(tablee.getElementsByClassName("correct"))
                .forEach(e => {
                    e.style.backgroundColor = "#00dd00";
            })
        } else if (element.textContent.includes("WRONG")) {
            Array.from(table.getElementsByClassName("wrong-path"))
                .forEach(e => {
                    e.style.backgroundColor = "#ff0000";
                })
            Array.from(tablee.getElementsByClassName("wrong-path"))
                .forEach(e => {
                    e.style.backgroundColor = "#ff0000";
            })
        } else if (element.textContent.includes("PATH")) {
            Array.from(table.getElementsByClassName("path"))
                .forEach(e => {
                    e.style.backgroundColor = "yellow";
                })
            Array.from(tablee.getElementsByClassName("path"))
                .forEach(e => {
                    e.style.backgroundColor = "yellow";
                })
        }
    })
    element.addEventListener("mouseout", () => {
        if (element.textContent.includes("WALL")) {
            Array.from(table.getElementsByClassName("wall"))
                .forEach(e => {
                    e.style.backgroundColor = "#4e4e4e71";
                })
            Array.from(tablee.getElementsByClassName("wall"))
                .forEach(e => {
                    e.style.backgroundColor = "#4e4e4e71";
            })
        } else if (element.textContent.includes("CORRECT")) {
            Array.from(table.getElementsByClassName("correct"))
                .forEach(e => {
                    e.style.backgroundColor = "#009c00";
                })
            Array.from(tablee.getElementsByClassName("correct"))
                .forEach(e => {
                    e.style.backgroundColor = "#009c00";
            })
        } else if (element.textContent.includes("WRONG")) {
            Array.from(table.getElementsByClassName("wrong-path"))
                .forEach(e => {
                    e.style.backgroundColor = "#ff8181";
                })
            Array.from(tablee.getElementsByClassName("wrong-path"))
                .forEach(e => {
                e.style.backgroundColor = "#ff8181";
            })
        } else if (element.textContent.includes("PATH")) {
            Array.from(table.getElementsByClassName("path"))
                .forEach(e => {
                    e.style.backgroundColor = "white";
                })
            Array.from(tablee.getElementsByClassName("path"))
                .forEach(e => {
                      e.style.backgroundColor = "white";
            })
        }
    })
});