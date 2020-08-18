import { createRequire } from 'module'
import { gatsby } from '../config/gatsby.js'

const require = createRequire(import.meta.url)
const path = require('path')

const createPathForGatsbyConfig = presentWorkingDirectory => {
  return path.join(presentWorkingDirectory, gatsby.configFileName)
}

const createPathForNewAvatar = (
  presentWorkingDirectory,
  newPostDirectory,
  fileName
) => {
  return path.join(
    presentWorkingDirectory,
    gatsby.postPath,
    newPostDirectory,
    fileName
  )
}

export { createPathForGatsbyConfig, createPathForNewAvatar }
