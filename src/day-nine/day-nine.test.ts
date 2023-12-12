import { describe, expect, test } from 'vitest'

import { partOne } from './1'

describe('day-four', () => {
  test('part-one test input', async () => {
    const result = await partOne(
      '/Users/tmastro/Code/AdventOfCode/src/day-nine/test-input.txt',
    )
    expect(result).toBe(114)
  })

  test('run day nine part one', async () => {
    const result = await partOne(
      '/Users/tmastro/Code/AdventOfCode/src/day-nine/input.txt',
    )
    console.log(result)
  })
})
