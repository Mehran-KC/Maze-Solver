# Maze Solver

This is a simple maze solver implemented in HTML and JavaScript. It allows you to visualize and solve a maze using a depth-first search (DFS) algorithm.

![2](https://github.com/Mehran-KC/Maze-Solver/assets/97556370/74fdfa61-59e7-45ee-ad13-ff0414ad1420)

## How It Works

The maze solver uses a 12x12 grid to represent the maze. The maze is defined as a 2D array of numbers, where `0` represents a wall and `1` represents a path. The starting position is denoted by `[4, 11]`, and the ending position is denoted by `[10, 0]`.

The solver algorithm recursively explores the maze using DFS. It marks visited nodes as `8` and wrong paths as `-8`. The solved path is marked as `8`.

## Usage

To use the maze solver:

1. Open the `index.html` file in a web browser.
2. The maze will be displayed on the screen.
3. Click the "Solve This MAZE !!!" button to start the solving process.
4. The maze will be solved, and the correct path will be highlighted in green (`8`), while wrong paths will be highlighted in red (`-8`).
5. You can hover over the legend items to see the corresponding cells highlighted in the maze.

## Customization

You can customize the maze by modifying the `maze` variable in the JavaScript code. The maze is defined as a 2D array, where `0` represents a wall and `1` represents a path. Adjust the array values to create your own maze.

## Credits

The maze solver code is based on the DFS algorithm and the HTML/CSS structure provided.

## Demo

You can see a live demo of the maze solver [here](https://codepen.io/MehranKC/pen/eYQObyB).

## Screenshots

![1](https://github.com/Mehran-KC/Maze-Solver/assets/97556370/8aaad2c6-8fd6-4684-970f-ffab83391461)

![2](https://github.com/Mehran-KC/Maze-Solver/assets/97556370/cc6179cf-3673-45c5-ba11-40337f84c9fa)

---
