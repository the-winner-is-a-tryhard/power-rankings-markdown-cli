import { createRequire } from 'module'
import { gatsby } from '../config/gatsby.js'
import {
  createNewPostDirectoryName,
  createPathForGatsbyConfig,
  createPathForMarkdownPost,
  createPathForNewPostDirectory,
} from './path.js'

const require = createRequire(import.meta.url)
const fs = require('fs')
const colors = require('colors')
const emoji = require('node-emoji')

const doesCurrentPathContainGatsbyConfig = presentWorkingDirectory => {
  console.log(
    colors.green(
      emoji.emojify(
        `:file_folder: Checking ${presentWorkingDirectory} for ${gatsby.configFileName}`
      )
    )
  )
  return fs.existsSync(createPathForGatsbyConfig(presentWorkingDirectory))
}

const createNewPostDirectory = (
  presentWorkingDirectory,
  authorFirstName,
  weekText
) => {
  const newDirectoryName = createNewPostDirectoryName(authorFirstName, weekText)
  const newPostDirectoryPath = createPathForNewPostDirectory(
    presentWorkingDirectory,
    newDirectoryName
  )
  fs.mkdir(newPostDirectoryPath, { recursive: true }, error => {
    if (error) {
      console.log(
        colors.red(
          emoji.emojify(
            `:x: Failed to create directory at ${newPostDirectoryPath}\n${error}`
          )
        )
      )
      throw new Error('Failed to create directory')
    } else {
      console.log(
        colors.green(
          emoji.emojify(
            `:white_check_mark: Successfully create post directory at ${newPostDirectoryPath}`
          )
        )
      )
    }
  })
}

const writeMarkdownToFile = (pathToNewBlogDirectory, markdown) => {
  fs.writeFileSync(
    createPathForMarkdownPost(pathToNewBlogDirectory),
    markdown,
    error => {
      if (error) {
        console.log(error)
      }
    }
  )
}

export {
  doesCurrentPathContainGatsbyConfig,
  createNewPostDirectory,
  writeMarkdownToFile,
}
