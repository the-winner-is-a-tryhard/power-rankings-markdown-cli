import { createRequire } from 'module'
import { validateYear } from '../lib/validation/year.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Year validation', () => {
  it('should not return anything for non-integer input', () => {
    // arrange
    const yearArgument = 'One'
    const expectedOutput = null

    // act
    const actualOutput = validateYear(yearArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should return an integer for an integer greater than or equal to 2020 and less than or equal to 2100', () => {
    // arrange
    const yearArgument = 2021
    const expectedOutput = 2021

    // act
    const actualOutput = validateYear(yearArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not return anything for a value less than 2020', () => {
    // arrange
    const yearArgument = 2019
    const expectedOutput = null

    // act
    const actualOutput = validateYear(yearArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not return anything for a value greater than 2100', () => {
    // arrange
    const yearArgument = 2101
    const expectedOutput = null

    // act
    const actualOutput = validateYear(yearArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
})
