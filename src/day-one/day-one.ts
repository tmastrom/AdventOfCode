import { open } from 'node:fs/promises'

function isCharNumber(c: string) {
  return c >= '0' && c <= '9'
}

function getValueFromRegexMatch(matchItem: RegExpMatchArray) {
  if (matchItem[0] !== undefined && matchItem[0] !== '') {
    return matchItem[0]
  } else {
    for (const item of matchItem) {
      if (item) {
        return item
      }
    }
  }
}

const numMap = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

const re =
  /[0-9]|(?=(one))|(?=(two))|(?=(three))|(?=(four))|(?=(five))|(?=(six))|(?=(seven))|(?=(eight))|(?=(nine))/g

async function partOne() {
  const file = await open('/Users/mastro/code/advent-of-code/day-one/input.txt')
  let answer = 0
  for await (const line of file.readLines()) {
    const documentNumbers: Array<string> = []

    for (const char of line) {
      if (isCharNumber(char)) {
        documentNumbers.push(char)
      }
    }
    const first = documentNumbers.shift()
    const last = documentNumbers.length > 0 ? documentNumbers.pop() : first

    if (first === undefined || last === undefined) {
      throw new Error('undefined')
    }
    const calibrationVal = first + last
    answer += parseInt(calibrationVal)
  }

  return answer
}

async function partTwo() {
  const file = await open('/Users/mastro/code/advent-of-code/day-one/input.txt')
  let sum = 0
  for await (const line of file.readLines()) {
    const matches = line.matchAll(re)
    const matchArray = Array.from(matches)
    // Get the first and last matches from the regex results
    const firstMatch = matchArray[0]
    const lastMatch = matchArray[matchArray.length - 1]

    const firstNum = getValueFromRegexMatch(firstMatch)
    const lastNum = getValueFromRegexMatch(lastMatch)

    if (firstNum === undefined || lastNum === undefined) {
      throw new Error('undefined')
    }

    /** map string to number if necessary */
    const first = isCharNumber(firstNum) ? firstNum : numMap[firstNum]
    const last = isCharNumber(lastNum) ? lastNum : numMap[lastNum]

    const calibrationVal = first + last
    sum += parseInt(calibrationVal)
  }

  return sum
}

console.log(await partOne())
console.log(await partTwo())
