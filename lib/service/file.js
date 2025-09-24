import { createRequire } from 'module'
import { docusaurus } from '../config/docusaurus.js'

const require = createRequire(import.meta.url)
const fs = require('fs')
const colors = require('colors')
const emoji = require('node-emoji')

const doesCurrentPathContainGatsbyConfig = (
  presentWorkingDirectory,
  pathForGatsbyConfig
) => {
  console.log(
    colors.green(
      emoji.emojify(
        `:file_folder: Checking ${presentWorkingDirectory} for ${docusaurus.configFileName}`
      )
    )
  )
  return fs.existsSync(pathForGatsbyConfig)
}

const createNewPostDirectory = (
  presentWorkingDirectory,
  newPostDirectoryPath
) => {
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

const writeMarkdownToFile = (pathForMarkdownPost, markdown) => {
  fs.writeFileSync(pathForMarkdownPost, markdown, error => {
    if (error) {
      console.log(error)
    }
  })
}

export {
  doesCurrentPathContainGatsbyConfig,
  createNewPostDirectory,
  writeMarkdownToFile,
}
