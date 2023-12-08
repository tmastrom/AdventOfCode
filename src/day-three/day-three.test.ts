import { describe, expect, test } from 'vitest'

import { partOne } from './day-three'

describe('day-three', () => {
  test('part-one test input', async () => {
    const result = await partOne(
      '/Users/mastro/code/advent-of-code/src/day-three/test-input.txt',
    )
    expect(result).toBe(4361)
  })

  test('run part-one', async () => {
    const result = await partOne(
      '/Users/mastro/code/advent-of-code/src/day-three/input.txt',
    )
    // console.log('result', result)
  })
})
