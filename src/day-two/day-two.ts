import { open } from 'node:fs/promises'

const maximums = {
  red: 12,
  green: 13,
  blue: 14,
}

export async function partOne() {
  const file = await open('/Users/mastro/code/advent-of-code/day-two/input.txt')

  const gameIds = Array<number>()

  for await (const line of file.readLines()) {
    // example Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    const gameArray = line.split(':')
    const gameId = gameArray[0].split(' ')[1]
    const handfuls = gameArray[1].split(';')

    const currentGame = {
      red: Array<number>(),
      green: Array<number>(),
      blue: Array<number>(),
    }

    for (const handful of handfuls) {
      const colors = handful.split(',')

      for (const color of colors) {
        const [count, colorName] = color.trim().split(' ')
        const colorCount = Number(count)
        // add colorCount to the current game
        currentGame[colorName].push(colorCount)
      }
    }

    // for each color in the currentGame, check if the max is too high
    if (
      Math.max(...currentGame['red']) <= maximums['red'] &&
      Math.max(...currentGame['green']) <= maximums['green'] &&
      Math.max(...currentGame['blue']) <= maximums['blue']
    ) {
      gameIds.push(Number(gameId))
    }
  }

  // sum the gameIds array
  const sum = gameIds.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

  return sum
}

console.log(await partOne())

// The power of a set of cubes
//is equal to the numbers of red, green, and blue cubes multiplied together

// For each game, find the minimum set of cubes that must have been present.
// What is the sum of the power of these sets?
export async function partTwo() {
  const file = await open('/Users/mastro/code/advent-of-code/day-two/input.txt')

  let ans = 0

  for await (const line of file.readLines()) {
    // example Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    const gameArray = line.split(':')
    const handfuls = gameArray[1].split(';')

    const currentGame = {
      red: Array<number>(),
      green: Array<number>(),
      blue: Array<number>(),
    }

    for (const handful of handfuls) {
      const colors = handful.split(',')

      for (const color of colors) {
        const [count, colorName] = color.trim().split(' ')
        const colorCount = Number(count)
        // add colorCount to the current game
        currentGame[colorName].push(colorCount)
      }
    }

    const power =
      Math.max(...currentGame['red']) *
      Math.max(...currentGame['green']) *
      Math.max(...currentGame['blue'])
    ans += power
  }

  return ans
}

console.log(await partTwo())
