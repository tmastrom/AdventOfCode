import { describe, expect, test } from 'vitest'

import { readLines } from '../utils/readlines'
import { solve } from './day-eight'

describe('day-8', () => {
  test('test input part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-eight/test-input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve(fileArray)
    expect(result).toBe(6)
  })

  test('part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-eight/input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve(fileArray)
    expect(result).toBe(11567)
  })
})
