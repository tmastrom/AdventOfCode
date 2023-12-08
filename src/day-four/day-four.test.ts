import { describe, expect, test } from 'vitest'

import { sumArray } from '../utils/utility'
import { partOne } from './1'
import { partTwo } from './2'

describe('day-four', () => {
  test('part-one test input', async () => {
    const result = await partOne(
      '/Users/mastro/code/advent-of-code/src/day-four/test-input.txt',
    )
    expect(result).toBe(13)
  })

  test('run part-one', async () => {
    const result = await partOne(
      '/Users/mastro/code/advent-of-code/src/day-four/input.txt',
    )
    console.log('result', result)
  })

  test('part-two test input', async () => {
    const result = await partTwo(
      '/Users/mastro/code/advent-of-code/src/day-four/test-input.txt',
    )

    const exampleAnswer = [1, 2, 4, 8, 14, 1]
    expect(sumArray(exampleAnswer)).toBe(30)

    expect(result).toEqual(exampleAnswer)

    const ans = sumArray(result)

    expect(ans).toBe(30)
  })

  //   test.only('run part-two', async () => {
  //     const result = await partTwo(
  //       '/Users/mastro/code/advent-of-code/src/day-four/input.txt',
  //     )
  //     const ans = sumArray(result)
  //     console.log(ans)
  //   })
})
