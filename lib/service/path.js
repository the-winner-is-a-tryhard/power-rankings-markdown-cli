import { createRequire } from 'module'
import { docusaurus } from '../config/docusaurus.js'

const require = createRequire(import.meta.url)
const path = require('path')

const markdownFileName = 'index.md'

const createPathForGatsbyConfig = presentWorkingDirectory =>
  path.join(presentWorkingDirectory, docusaurus.configFileName)

const createPathForNewAvatar = (
  presentWorkingDirectory,
  newPostDirectory,
  fileName
) =>
  path.join(
    presentWorkingDirectory,
    docusaurus.postPath,
    newPostDirectory,
    fileName
  )

const createNewPostDirectoryName = (authorFirstName, weekText, year) =>
  `${authorFirstName.toLowerCase()}-week-${weekText.toLowerCase()}-${year}-power-rankings`

const createPathForNewPostDirectory = (
  presentWorkingDirectory,
  newDirectoryName
) => path.join(presentWorkingDirectory, docusaurus.postPath, newDirectoryName)

const createPathForMarkdownPost = pathToNewBlogDirectory =>
  path.join(pathToNewBlogDirectory, markdownFileName)

export {
  createPathForGatsbyConfig,
  createPathForNewAvatar,
  createNewPostDirectoryName,
  createPathForNewPostDirectory,
  createPathForMarkdownPost,
}
