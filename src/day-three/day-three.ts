import { readLines } from '../utils/readlines'
import { arrayRange, findCommonElements, isCharNumber } from '../utils/utility'

// Add up all the part numbers in the engine schematic,
// any number adjacent to a symbol, even diagonally,
// is a "part number" and should be included in your sum.

export function isSymbol(char: string) {
  return !char.match(symbols)
}

const symbols = new RegExp('[0-9.]', 'g')

export async function partOne(filepath: string) {
  const file = await readLines(filepath)
  const fileArray = (await file) as Array<string>

  const numsObj = new Object()

  fileArray.forEach((line, index) => {
    let numStart = 0
    const nums = {}
    const symbols: Array<number> = []

    const lineArr = line.split('')
    lineArr.forEach((char, idx) => {
      if (isSymbol(char)) {
        symbols.push(idx)
      }
      // concatenate numbers based on the start index
      if (isCharNumber(char)) {
        // if the previous char is not a number, start a new number
        if (!isCharNumber(lineArr[idx - 1])) {
          numStart = idx
          nums[numStart] = char
        }
        // else add to the current number string
        else {
          nums[numStart] += char
        }
      }
    })

    numsObj[index] = { nums: nums, symbols: symbols }
  })

  function getWindow(
    lineIndex: number,
    numberIndex: number,
    numString: string,
  ) {
    // based on the length of the string, get the window
    const length = numString.length

    // get the indices of the window
    const windowRange = arrayRange(numberIndex - 1, numberIndex + length + 1, 1)

    // get symbols for the current line + above and below
    const symbolsAbove = numsObj[lineIndex - 1]?.symbols || []
    const symbolsInline = numsObj[lineIndex]?.symbols || []
    const symbolsBelow = numsObj[lineIndex + 1]?.symbols || []

    if (
      findCommonElements(symbolsAbove, windowRange) ||
      findCommonElements(symbolsInline, windowRange) ||
      findCommonElements(symbolsBelow, windowRange)
    )
      return true
    return false
  }

  let ans = 0

  Object.keys(numsObj).forEach((id) => {
    const nums = numsObj[id].nums

    Object.keys(nums).forEach((numIndex) => {
      const num = nums[numIndex]
      const inWindow = getWindow(parseInt(id), parseInt(numIndex), num)

      if (inWindow) {
        ans += parseInt(num)
      }
    })
  })

  return ans
}
