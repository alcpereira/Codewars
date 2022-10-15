function pathFinder(maze) {
  maze = maze.split('\n').map(e => e.split(''))
  const len = maze.length
  const start = [0, 0]

  const nb = pos => [[pos[0] + 1, pos[1]], [pos[0] - 1, pos[1]], [pos[0], pos[1] + 1], [pos[0], pos[1] - 1]]

  const solve = (pos, maze, visited = new Set()) => {
    if (pos[0] === maze.length - 1 && pos[1] === maze.length - 1) { return true }
    if (visited.has(`${pos[0]}-${pos[1]}`)) { return false }
    if (pos[0] < 0 || pos[0] >= maze.length || pos[1] < 0 || pos[1] >= maze.length) { return false }
    if (maze[pos[0]][pos[1]] === 'W') { return false }
    visited.add(`${pos[0]}-${pos[1]}`)
    for (const n of nb(pos)) {
      if (solve(n, maze, visited)) { return true }
    }

    return false
  }

  return solve(start, maze)

}

console.log(pathFinder(`.W.
.W.
...`))