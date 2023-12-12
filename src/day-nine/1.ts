import { readLines } from '../utils/readlines'
import { sumArray } from '../utils/utility'

function getDifference(arr: Array<number>) {
  const diff: Array<number> = []
  arr.map((val, index) => {
    if (arr[index + 1]) diff.push(arr[index + 1] - arr[index])
  })
  return diff
}

function allZero(arr: Array<number>) {
  let isAllZero: boolean = true
  arr.forEach((val) => {
    if (val !== 0) {
      isAllZero = false
    }
  })
  return isAllZero
}

export async function partOne(filepath: string) {
  const file = await readLines(filepath)
  const fileArray = (await file) as Array<string>

  const predictions: Array<number> = []

  fileArray.forEach((line, index) => {
    //start by making a new sequence from the difference at each step of your history
    const arr = line.split(' ').map((val) => parseInt(val))
    const data: Array<Array<number>> = [arr]
    for (let i = 1; i < arr.length; i++) {
      data[i] = getDifference(data[i - 1])
      if (allZero(data[i])) {
        break
      }
    }

    for (let i = data.length - 1; i > 0; i--) {
      // To extrapolate, start by adding a new zero to the end of your list of zeroes;
      if (allZero(data[i])) {
        data[i].push(0)
      }
      // get the last element in the sequence of the current row
      const last = data[i][data[i].length - 1]
      // add it to the last element in the sequence of the previous row and append to the previous row
      const prev = data[i - 1].pop() || 0

      data[i-1].push(prev)
      data[i-1].push(prev + last)
    }
    predictions.push(data[0][data[0].length - 1])
  })
  console.log('predictions', predictions)
  return sumArray(predictions)
}
