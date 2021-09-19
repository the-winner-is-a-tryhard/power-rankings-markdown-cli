import { createRequire } from 'module'
import {
  getLeagueMatchups,
  getLeagueMembers,
  getLeagueRosters,
} from '../lib/league/sleeper.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Sleeper integration', async () => {
  it('should fetch league members from the RESTful API', async () => {
    // act
    const actualOutput = await getLeagueMembers(true)

    // assert
    assert.equal(actualOutput.length > 0, true)
  })
  it('should fetch league rosters from the RESTful API', async () => {
    // act
    const actualOutput = await getLeagueRosters(true)

    // assert
    assert.equal(actualOutput.length > 0, true)
  })
  it('should fetch league matchups from the RESTful API', async () => {
    // act
    const actualOutput = await getLeagueMatchups(1, true)

    // assert
    assert.equal(actualOutput.length > 0, true)
  })
})
