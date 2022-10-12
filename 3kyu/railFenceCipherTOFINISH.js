// WEAREDISCOVEREDFLEEATONCE
// WECRLTEERDSOEEFEAOCAIVDEN


// 2 rails
// W A E I C V
//  E R D S O 
// rail0: 0, 2, 4 ... %2
// rail1: 1, 3, 5 ... %2


// 3 rails
// W   E   C
//  E R D S O
//   A   I   V
// rail0: 0, 4, 8, ... %4
// rail1: 1, 3, 5, ... %2
// rail2: 2, 6, 10, ... %4

// 4 rails
// W     I
//  E   D S
//   A E   C V
//    R     O
// rail0: 0, 6, ... %6
// rail1: 

// Brute force
const direction = {
  down: 1,
  up: -1
}

const nextDirection = {
  down: 'up',
  up: 'down'
}

function encodeRailFenceCipher(string, numberRails) {
  i = 0 // current rail
  dir = 'down'
  rails = Array(numberRails).fill([])
  while (string.length > 0) {
    currentLetter = string[0]
    string = string.slice(1)
    rails[i] = [...rails[i], currentLetter]
    // console.log(rails, i, currentLetter, rails[i])
    if (dir === 'up' && i === 0 || dir === 'down' && i === numberRails - 1) {
      dir = nextDirection[dir]
    }
    i += direction[dir]
    // console.log(i)
  }
  return rails.map(e => e.join('')).join('')
}


function decodeRailFenceCipher(string, numberRails) {
  i = 0 // current rail
  dir = 'down'
  rails = Array(numberRails).fill([])
  while (string.length > 0) {
    currentLetter = string[0]
    string = string.slice(1)
    rails[i] = [...rails[i], currentLetter]
    // console.log(rails, i, currentLetter, rails[i])
    if (dir === 'up' && i === 0 || dir === 'down' && i === numberRails - 1) {
      dir = nextDirection[dir]
    }
    i += direction[dir]
    // console.log(i)
  }
  return rails
}


// console.log(encodeRailFenceCipher("Hello, World!", 3))
// console.log(encodeRailFenceCipher("Hello, World!", 3) === "Hoo!el,Wrdl l");
console.log(decodeRailFenceCipher("Hoo!el,Wrdl l", 3));
// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) === "WECRLTEERDSOEEFEAOCAIVDEN");
