import { createRequire } from 'module'
import { createPathForGatsbyConfig, createPathForNewAvatar } from './path.js'
import { httpGet } from './https.js'

const require = createRequire(import.meta.url)
const fs = require('fs')
const path = require('path')
const colors = require('colors')
const emoji = require('node-emoji')
const presentWorkingDirectory = process.env.PWD

const doesCurrentPathContainGatsbyConfig = () => {
  console.log(
    colors.green(
      emoji.emojify(
        `:file_folder: Checking ${presentWorkingDirectory} for ${gatsby.configFileName}`
      )
    )
  )
  return fs.existsSync(createPathForGatsbyConfig(presentWorkingDirectory))
}

const createNewPostDirectory = () => {}

const downloadAvatar = async (url, newPostDirectory, fileName) => {
  const file = fs.createWriteStream(
    createPathForNewAvatar(presentWorkingDirectory, newPostDirectory, fileName)
  )
  const data = await httpGet()
}

export { doesCurrentPathContainGatsbyConfig }
