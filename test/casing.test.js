import { createRequire } from 'module'
import { capitalizeOnlyFirstLetter } from '../lib/service/casing.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Casing', () => {
  it('should only capitalize the first letter for all lowercase', () => {
    // arrange
    const word = 'scottie'
    const expectedOutput = 'Scottie'

    // act
    const actualOutput = capitalizeOnlyFirstLetter(word)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should only capitalize the first letter for all uppercase', () => {
    // arrange
    const word = 'SCOTTIE'
    const expectedOutput = 'Scottie'

    // act
    const actualOutput = capitalizeOnlyFirstLetter(word)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should only capitalize the first letter for random casing', () => {
    // arrange
    const word = 'ScoTTiE'
    const expectedOutput = 'Scottie'

    // act
    const actualOutput = capitalizeOnlyFirstLetter(word)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should not crash on bad input', () => {
    // arrange
    const word = null
    const expectedOutput = undefined

    // act
    const actualOutput = capitalizeOnlyFirstLetter(word)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
})
