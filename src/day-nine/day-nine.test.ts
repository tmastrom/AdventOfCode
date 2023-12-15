import { describe, expect, test } from 'vitest'

import { readLines } from '../utils/readlines'
import { solve } from './1'

describe('day-9', () => {
  test('part-one test input', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-nine/test-input.txt',
    )
    const fileArray = (await file) as Array<string>

    const result = solve(fileArray)
    expect(result.part1).toBe(114)
    expect(result.part2).toBe(2)
  })

  test('run day nine part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-nine/input.txt',
    )
    const fileArray = (await file) as Array<string>

    const result = solve(fileArray)
    console.log('Day 9:',result)
  })
})
