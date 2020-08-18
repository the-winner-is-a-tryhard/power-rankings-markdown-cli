import { createRequire } from 'module'
import {
  createPathForGatsbyConfig,
  createPathForNewAvatar,
} from '../lib/service/path.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Path', () => {
  it('should create path for Gatsby config file in present working directory', () => {
    // arrange
    const presentWorkingDirectory =
      '/Users/scottenriquez/Documents/GitHub/gatsby-frontend/TWIATH'
    const expectedOutput =
      '/Users/scottenriquez/Documents/GitHub/gatsby-frontend/TWIATH/gatsby-config.js'

    // act
    const actualOutput = createPathForGatsbyConfig(presentWorkingDirectory)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should create path for an avatar image in the new post directory', () => {
    // arrange
    const presentWorkingDirectory =
      '/Users/scottenriquez/Documents/GitHub/gatsby-frontend/TWIATH'
    const newPostDirectory = 'scottie-week-one-power-rankings'
    const fileName = 'scottie-avatar.png'
    const expectedOutput =
      '/Users/scottenriquez/Documents/GitHub/gatsby-frontend/TWIATH/content/blog/posts/scottie-week-one-power-rankings/scottie-avatar.png'

    // act
    const actualOutput = createPathForNewAvatar(
      presentWorkingDirectory,
      newPostDirectory,
      fileName
    )

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
})
