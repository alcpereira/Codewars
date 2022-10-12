class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

function hasElementWithChildren(l) {
  return l.some(v => v[v.length - 1].children.length > 0)
}

function getPINs(observed) {
  const edges = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
    0: [0, 8]
  }

  let root = new Node('')
  let currNodes = [root]

  for (const number of observed.split('')) {
    e = edges[number]
    let nextNodes = []
    for (const node of currNodes) {
      for (const child of e) {
        n = new Node(child)
        node.children.push(n)
        nextNodes.push(n)
      }
    }
    currNodes = nextNodes
  }

  let outArray = [[root]]
  let output = []
  while (hasElementWithChildren(outArray)) {
    a = outArray.shift() // [root]
    b = a[a.length - 1] // root
    for (let i = 0; i < a.children.length; i++) {
      let child = a.children[i]
      console.log(child, i)
      outArray.push([...a, child])
    }
  }

  console.log(outArray)

  // Descends all nodes until leaves & add to output


}
