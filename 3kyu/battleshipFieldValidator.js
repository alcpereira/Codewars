// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

field = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


let hash = (row, col) => `${row}-${col}`
let unhash = s => s.split('-').map(Number)

let getNb = (x, y) => {
  return [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1]
  ]
}

let check = islands => {

  count = { 4: 1, 3: 2, 2: 3, 1: 4 }
  headsAndTails = []

  for (const island of islands) {
    let l = island.length

    if (l in count) { count[l]-- }
    else { return false }

    if (l === 1) { headsAndTails.push(unhash(island[0])) }
    else if (l > 2) {
      head = unhash(island[0])
      tail = unhash(island[island.length - 1])
      headsAndTails.push(head)
      headsAndTails.push(tail)
      if (head[0] === tail[0]) {
        // row equals -> horizontal
        if (island.map(unhash).filter(e => e[0] !== head[0]).length > 0) { return false }
      } else if (head[1] === tail[1]) {
        if (island.map(unhash).filter(e => e[1] !== head[1]).length > 0) { return false }
        // col equals -> vertical
      } else {
        return false
      }
    }

  }

  // Should have exactly 1 of 4, 2 of 3, 3 of 2 and 4 of 1
  for (const c in count) {
    if (count[c] !== 0) { return false }
  }

  // No edge touching
  for (let i = 0; i < headsAndTails.length; i++) {
    curr = headsAndTails[i]
    for (const otherElement of headsAndTails.slice(i + 1)) {
      let x_distance = Math.abs(curr[0] - otherElement[0])
      let y_distance = Math.abs(curr[1] - otherElement[1])
      if (x_distance === 1 && y_distance === 1) { return false }
    }

  }

  return true
}

let visitIsland = (field, h, visited, islands) => {
  let [row, col] = unhash(h)
  currentIsland = [h]
  visited.add(h)

  queue = []
  for (nb of getNb(row, col)) {
    queue.push(nb)
  }

  while (queue.length > 0) {
    let [row, col] = queue.shift()

    if (row < 0 || row >= field[0].length || col < 0 || col >= field.length) { continue }
    current = field[row][col]
    hCurrent = hash(row, col)
    if (current === 0) { continue }
    if (visited.has(hCurrent)) { continue }

    visited.add(hCurrent)
    currentIsland.push(hCurrent)
    for (nb of getNb(row, col)) {
      queue.push(nb)
    }
  }

  islands.push(currentIsland)
}

let validateBattlefield = field => {
  let visited = new Set()
  let islands = []
  for (let row = 0; row < field.length; row++) {
    for (let col = 0; col < field[row].length; col++) {
      let cell = field[row][col]
      let h = hash(row, col)
      if (visited.has(h)) { continue }
      if (cell === 0) { continue }
      visitIsland(field, h, visited, islands)
    }
  }
  return check(islands)
}

console.log(validateBattlefield(field))