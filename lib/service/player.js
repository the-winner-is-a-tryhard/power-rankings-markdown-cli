import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { dataConfig } from '../config/data.js'

const require = createRequire(import.meta.url)
const fs = require('fs')
const path = require('path')

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const players = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', '..', dataConfig.pathToPlayerDataFile)
  )
)

const getPlayerForSleeperID = sleeperPlayerID => players[sleeperPlayerID]

export { getPlayerForSleeperID }
