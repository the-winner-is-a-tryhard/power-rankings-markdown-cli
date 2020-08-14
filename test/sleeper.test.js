import { createRequire } from 'module'
import { getLeagueMembers } from '../lib/league/sleeper.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Sleeper integration', async () => {
  it('should fetch data from the API', async () => {
    // act
    const actualOutput = await getLeagueMembers()

    // assert
    assert.equal(actualOutput.length > 0, true)
  })
})
