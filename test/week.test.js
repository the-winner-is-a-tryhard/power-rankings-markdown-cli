import { createRequire } from 'module'
import { validateWeek } from '../lib/validation/week.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Week validation', () => {
  it('should not return anything for non-integer input', () => {
    // arrange
    const weekArgument = 'One'
    const expectedOutput = null

    // act
    const actualOutput = validateWeek(weekArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should return an integer for an integer greater than or equal to 0 and less than or equal to 17', () => {
    // arrange
    const weekArgument = 1
    const expectedOutput = 1

    // act
    const actualOutput = validateWeek(weekArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not return anything for a value less than 0', () => {
    // arrange
    const weekArgument = -1
    const expectedOutput = null

    // act
    const actualOutput = validateWeek(weekArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not return anything for a value greater than 17', () => {
    // arrange
    const weekArgument = 18
    const expectedOutput = null

    // act
    const actualOutput = validateWeek(weekArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
})
