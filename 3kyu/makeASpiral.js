// right -> down = - 2
// down -> left = 0
// left -> up = -2
// up -> right = 0

const changes = {
  right: { next: 'down', delta: -2 },
  down: { next: 'left', delta: 0 },
  left: { next: 'up', delta: -2 },
  up: { next: 'right', delta: 0 }
}

const rowcol = {
  right: { row: 0, col: 1 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  up: { row: -1, col: 0 },
}

function spiralize(n) {
  let array = Array(n).fill().map(e => Array(n).fill(1))
  pos = { row: 1, col: -1 }
  direction = 'right'
  len_curr = n - 1
  i = len_curr
  while (i > 0) {
    pos.row += rowcol[direction].row
    pos.col += rowcol[direction].col
    array[pos.row][pos.col] = '0'
    if (i === 1) {
      len_curr += changes[direction].delta
      direction = changes[direction].next
      i = len_curr
    } else {
      i--
    }
  }

  return array
}

console.log(spiralize(20).join('\n'))
// Spiral 5
// 00000
// ....0 -> 4 right
// 000.0 -> 2 down
// 0...0 -> 2 left
// 00000

// Spiral 10
// 0000000000
// .........0 -> 9 right
// 00000000.0 -> 7 down
// 0......0.0 -> 5 right
// 0.0000.0.0 -> 3 down
// 0.0..0.0.0 -> 1 up - 1 right
// 0.0....0.0 -> 3 left
// 0.000000.0 -> 5 up
// 0........0 -> 7 left
// 0000000000

// Spiral 11
// 00000000000
// ..........0 -> 10 right
// 000000000.0 -> 8 down
// 0.......0.0 -> 6 right
// 0.00000.0.0
// 0.0...0.0.0
// 0.0.000.0.0
// 0.0.....0.0
// 0.0000000.0 -> 6 up
// 0.........0 -> 8 left
// 00000000000
