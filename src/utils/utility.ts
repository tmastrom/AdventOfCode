export function isCharNumber(c: string) {
  return c >= '0' && c <= '9'
}

export function findCommonElements(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item))
}

export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step,
  )
