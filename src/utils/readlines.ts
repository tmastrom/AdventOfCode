import * as fs from 'node:fs'
import * as readline from 'node:readline'

export function readLines(fileName: string) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(fileName)) {
      return reject('File not found: ' + fileName)
    }

    let rl = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
    })

    let lines = new Array<string>()
    rl.on('line', (line) => lines.push(line))
    rl.on('close', () => resolve(lines))
    rl.on('error', (err) => reject(err))
  })
}
