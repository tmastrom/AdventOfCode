// --- Day 8: Haunted Wasteland ---

// start at AAA until you hit ZZZ
// repeat the whole sequence of instructions as necessary
const end = 'ZZZ'

function isAlpha(c: string) {
  return c >= 'A' && c <= 'Z'
}

const mapLR = {
  L: 0,
  R: 1,
}

export function solve(lines: string[]) {
  const lr = lines.shift()?.split('') || []
  // console.log('instructions', lr)
  lines.shift()

  const nodes = lines.reduce((acc, cur, i) => {
    const [key, value] = cur.split(' = ')

    const val = {
      L: value
        .split(' ')[0]
        .split('')
        .filter((c) => isAlpha(c))
        .join(''),
      R: value
        .split(' ')[1]
        .split('')
        .filter((c) => isAlpha(c))
        .join(''),
    }

    acc[key] = val
    return acc
  }, [])

  // console.log(nodes)

  let i = 0
  let currentNode = 'AAA'
  // console.log(`node: ${currentNode}=`, nodes[currentNode])
  while (currentNode !== end) {
    // console.log(`${i}: ${lr[i % lr.length]}`)
    currentNode = Object.values(nodes[currentNode])[mapLR[lr[i % lr.length]]] as string
    // console.log(`node: ${currentNode}=`, nodes[currentNode])
    i++
  }
  // console.log(i)
  return i
}
