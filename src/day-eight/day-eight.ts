// --- Day 8: Haunted Wasteland ---
import { isCharNumber } from '../utils/utility'

function isAlpha(c: string) {
  return c >= 'A' && c <= 'Z'
}

function isAlphaNumeric(c: string) {
  return isAlpha(c) || isCharNumber(c)
}

const mapLR = {
  L: 0,
  R: 1,
}

// start at AAA until you hit ZZZ
// repeat the whole sequence of instructions as necessary
export function solve(lines: string[], startNode: string = 'AAA') {
  const lr = lines.shift()?.split('') || []
  // console.log('instructions', lr)
  lines.shift()

  const nodes: Array<Record<string, any>> = lines.reduce((acc, cur, i) => {
    const [key, value] = cur.split(' = ')

    const val = {
      L: value
        .split(' ')[0]
        .split('')
        .filter((c) => isAlphaNumeric(c))
        .join(''),
      R: value
        .split(' ')[1]
        .split('')
        .filter((c) => isAlphaNumeric(c))
        .join(''),
    }
    acc[key] = val
    return acc
  }, [])

  // console.log(Object.keys(nodes).filter((k) => k.endsWith('A')))
  let i = 0
  let currentNode = startNode

  while (currentNode?.split('')[currentNode.length - 1] !== 'Z') {
    currentNode = Object.values(nodes[currentNode])[
      mapLR[lr[i % lr.length]]
    ] as string
    // console.log('last char',currentNode?.split('')[currentNode.length - 1])
    i++
  }

  return i
}
