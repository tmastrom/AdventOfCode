import { describe, expect, test } from 'vitest'

import { readLines } from '../utils/readlines'
import { solve } from './day-seven'
import { solve as solve2 } from './day-seven-2'

describe('day-7', () => {
  test('test input part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-seven/test-input.txt',
    )
    const fileArray = (await file) as Array<string>

    const result = solve(fileArray)
    expect(result).toBe(6440)
  })

  test('test input part two', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-seven/test-input.txt',
    )
    const fileArray = (await file) as Array<string>

    const result = solve2(fileArray)
    expect(result).toBe(5905)
  })

  test('run day seven part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-seven/input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve(fileArray)
    expect(result).toBe(250370104)
  })

  test('run day seven part two', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-seven/input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve2(fileArray)
    expect(result).toBe(251735672)
  })
})
