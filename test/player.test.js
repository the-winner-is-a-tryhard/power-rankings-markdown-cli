import { createRequire } from 'module'
import { getPlayerForSleeperID } from '../lib/service/player.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Player', () => {
  it('get name for Sleeper ID', () => {
    // arrange
    const sleeperPlayerID = 'HOU'
    const expectedOutput = {
      team: 'HOU',
      sport: 'nfl',
      position: 'DEF',
      player_id: 'HOU',
      last_name: 'Texans',
      first_name: 'Houston',
      fantasy_positions: ['DEF'],
      active: true,
    }

    // act
    const actualOutput = getPlayerForSleeperID(sleeperPlayerID)

    // assert
    assert.deepStrictEqual(expectedOutput, actualOutput)
  })
})
