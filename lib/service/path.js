import { createRequire } from 'module'
import { gatsby } from '../config/gatsby.js'

const require = createRequire(import.meta.url)
const path = require('path')

const markdownFileName = 'index.md'

const createPathForGatsbyConfig = presentWorkingDirectory =>
  path.join(presentWorkingDirectory, gatsby.configFileName)

const createPathForNewAvatar = (
  presentWorkingDirectory,
  newPostDirectory,
  fileName
) =>
  path.join(
    presentWorkingDirectory,
    gatsby.postPath,
    newPostDirectory,
    fileName
  )

const createNewPostDirectoryName = (authorFirstName, weekText, year) =>
  `${authorFirstName.toLowerCase()}-week-${weekText.toLowerCase()}-${year}-power-rankings`

const createPathForNewPostDirectory = (
  presentWorkingDirectory,
  newDirectoryName
) => path.join(presentWorkingDirectory, gatsby.postPath, newDirectoryName)

const createPathForMarkdownPost = pathToNewBlogDirectory =>
  path.join(pathToNewBlogDirectory, markdownFileName)

export {
  createPathForGatsbyConfig,
  createPathForNewAvatar,
  createNewPostDirectoryName,
  createPathForNewPostDirectory,
  createPathForMarkdownPost,
}
