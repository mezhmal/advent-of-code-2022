const path = require('node:path')
const { getFile, readFile } = require('../../../tools/js')
const { parse } = require('./parse')
const { solvePart2 } = require('./solve-part-2')

// const filename = path.join(__dirname, 'test.txt')
// readFile(filename).then(data => {
//   const reports = parse(data)
//   const result = solvePart2(reports)
//   console.log(result)
// })

const url = 'https://adventofcode.com/2024/day/2/input'
getFile(url).then(data => {
  const reports = parse(data)
  const result = solvePart2(reports)
  console.log(result)
})