import { createRequire } from 'module'
import {
  createNewPostDirectoryName,
  createPathForGatsbyConfig,
  createPathForNewAvatar,
  createPathForNewPostDirectory,
} from '../lib/service/path.js'

const require = createRequire(import.meta.url)
const assert = require('assert')

describe('Path', () => {
  it('should create path for Gatsby config file in present working directory', () => {
    // arrange
    const presentWorkingDirectory =
      '/Users/scottenriquez/Documents/GitHub/docusaurus-frontend/TWIATH'
    const expectedOutput =
      '/Users/scottenriquez/Documents/GitHub/docusaurus-frontend/TWIATH/docusaurus-config.js'

    // act
    const actualOutput = createPathForGatsbyConfig(presentWorkingDirectory)

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should create path for an avatar image in the new post directory', () => {
    // arrange
    const presentWorkingDirectory =
      '/Users/scottenriquez/Documents/GitHub/docusaurus-frontend/TWIATH'
    const newPostDirectory = 'scottie-week-one-power-rankings'
    const fileName = 'scottie-avatar.png'
    const expectedOutput =
      '/Users/scottenriquez/Documents/GitHub/docusaurus-frontend/TWIATH/content/blog/posts/scottie-week-one-power-rankings/scottie-avatar.png'

    // act
    const actualOutput = createPathForNewAvatar(
      presentWorkingDirectory,
      newPostDirectory,
      fileName
    )

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should create a new post directory name with lowercase letter for week and author', () => {
    // arrange
    const authorFirstName = 'Scottie'
    const weekText = 'One'
    const year = 2021
    const expectedOutput = 'scottie-week-one-2021-power-rankings'

    // act
    const actualOutput = createNewPostDirectoryName(
      authorFirstName,
      weekText,
      year
    )

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
  it('should create path for the new post directory', () => {
    // arrange
    const presentWorkingDirectory =
      '/Users/scottenriquez/Documents/GitHub/docusaurus-frontend/TWIATH'
    const newDirectoryName = 'scottie-week-one-power-rankings'
    const expectedOutput =
      '/Users/scottenriquez/Documents/GitHub/docusaurus-frontend/TWIATH/content/blog/posts/scottie-week-one-power-rankings'

    // act
    const actualOutput = createPathForNewPostDirectory(
      presentWorkingDirectory,
      newDirectoryName
    )

    // assert
    assert.equal(expectedOutput, actualOutput)
  })
})
