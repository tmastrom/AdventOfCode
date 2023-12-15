import { describe, expect, test } from 'vitest'

import { readLines } from '../utils/readlines'
import { solve } from './day-eight'

describe('day-8', () => {
  test.skip('test input part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-eight/test-input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve(fileArray)
    expect(result).toBe(6)
  })

  test.skip('part one', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-eight/input.txt',
    )
    const fileArray = (await file) as Array<string>
    const result = solve(fileArray)
    expect(result).toBe(11567)
  })

  test('test input part two', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-eight/test-input2.txt',
    )
    const fileArray = (await file) as Array<string>
    const result1 = solve(fileArray, '11A') // 2
    expect(result1).toBe(2)
    // const result2 = solve(fileArray, '22A') // 3
    // expect(result2).toBe(3)

    // expect(result1*result2).toBe(6)
  })

  test('part two', async () => {
    const file = await readLines(
      '/Users/mastro/code/advent-of-code/src/day-eight/input.txt',
    )

    // [ 'AAA', 'BFA', 'VGA', 'DXA', 'VJA', 'BPA' ]
    const res = [11567, 21251, 12643, 16409, 19099, 14257]
    const fileArray = (await file) as Array<string>
    // console.log(solve(fileArray, 'AAA')) // 11567
    // console.log(solve(fileArray, 'BFA')) // 21251
    // console.log(solve(fileArray, 'VGA')) // 12643
    // console.log(solve(fileArray, 'DXA')) // 16409
    // console.log(solve(fileArray, 'VJA')) // 19099
    // console.log(solve(fileArray, 'BPA')) // 14257

    const lcm = (...arr) => {
      const gcd = (x, y) => (!y ? x : gcd(y, x % y));
      const _lcm = (x, y) => (x * y) / gcd(x, y);
      return [...arr].reduce((a, b) => _lcm(a, b));
    };
    console.log(lcm(...res)) // 9858474970153

    expect(lcm(...res)).toBe(9858474970153)
    // const result = 2*3
    // expect(result).toBe(6)
  })
})
