import { createRequire } from 'module'
import { validateAuthor } from '../lib/validation/author.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Author validation', () => {
  it('should validate and normalize a league member', () => {
    // arrange
    const authorArgument = 'scottie'
    const expectedOutput = 'Scottie Enriquez'

    // act
    const actualOutput = validateAuthor(authorArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not crash on bad input', () => {
    // arrange
    const authorArgument = null
    const expectedOutput = null

    // act
    const actualOutput = validateAuthor(authorArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not return anything for invalid league member', () => {
    // arrange
    const authorArgument = 'No one'
    const expectedOutput = null

    // act
    const actualOutput = validateAuthor(authorArgument, true)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
})
