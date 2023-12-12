import { readLines } from '../utils/readlines'
import { arrayRange, findCommonElements, sumArray } from '../utils/utility'

export async function partTwo(filepath: string) {
  const file = await readLines(filepath)
  const fileArray = (await file) as Array<string>

  let wins: Array<number> = []

  fileArray.forEach((line, index) => {
    const card = line.split(':')

    const cardId = parseInt(card[0].split(' ')[1])
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

      wins[cardId - 1] = winCount
    }
  })

  const cardCount = Array(fileArray.length).fill(1)

  wins.forEach((win, index) => {
    const range = arrayRange(index + 1, index + win, 1)

    range.forEach((r) => {
      // console.log(
      //   `card ${index} has ${win} matching cards, so you win ${cardCount[index]} copy of ${range}`,
      // )
      cardCount[r] = cardCount[r] + cardCount[index]
    })

    // console.log('card count', cardCount)
  })

  return cardCount
}
