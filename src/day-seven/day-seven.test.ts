import { describe, expect, test } from 'vitest'

import { readLines } from '../utils/readlines'
import { solve } from './day-seven'

describe('day-9', () => {
  test('part-one test input', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-seven/test-input.txt',
    )
    const fileArray = (await file) as Array<string>

    const result = solve(fileArray)
    expect(result).toBe(6440)
  })

  test('run day nine part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-seven/input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve(fileArray)
    console.log(result)
  })
})
