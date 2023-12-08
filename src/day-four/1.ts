import { readLines } from '../utils/readlines'
import { findCommonElements } from '../utils/utility'

export async function partOne(filepath: string) {
  const file = await readLines(filepath)
  const fileArray = (await file) as Array<string>

  let ans = 0

  fileArray.forEach((line, index) => {
    const card = line.split(':')

    const cardId = card[0]
    const numbers = card[1]
    const winningNumbers = numbers
      .split('|')[0]
      .split(' ')
      .filter((n) => n !== '')
    const myNumbers = numbers
      .split('|')[1]
      .split(' ')
      .filter((n) => n !== '')

    if (findCommonElements(winningNumbers, myNumbers)) {
      let winCount = 0

      myNumbers.forEach((n) => {
        if (winningNumbers.includes(n)) {
          winCount++
        }
      })

      const totalPoints = 2 ** (winCount - 1)

      ans += totalPoints
    }
  })

  return ans
}
