const path = require('node:path')
const { expect, test } = require('@jest/globals')
const { getFile, readFile } = require('../../../tools/js')
const { parse } = require('./parse')
const { solvePart1 } = require('./solve-part-1')

test('day 3. part 1 (short test)', async () => {
  const filename = path.join(__dirname, 'test-1.txt')
  const data = await readFile(filename)
  const reports = parse(data)
  const result = solvePart1(reports)
  expect(result).toBe(161)
})

test('day 3. part 1 (full test)', async () => {
  const url = 'https://adventofcode.com/2024/day/3/input'
  const data = await getFile(url)
  const reports = parse(data)
  const result = solvePart1(reports)
  expect(result).toBe(190604937)
})
