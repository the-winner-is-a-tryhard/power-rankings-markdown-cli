import { createRequire } from 'module'
import { generateRandomAdjective } from '../lib/service/adjective.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Adjective', () => {
  it('should generate a string with no whitespace', () => {
    // act
    const actualOutput = generateRandomAdjective()

    // assert
    assert.equal(typeof actualOutput === 'string', true)
    assert.equal(actualOutput.indexOf(' ') < 0, true)
  })
})
