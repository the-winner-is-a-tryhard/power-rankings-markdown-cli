import { createRequire } from 'module'
import { dataConfig } from '../config/data.js'

const require = createRequire(import.meta.url)
const fs = require('fs')

const players = JSON.parse(fs.readFileSync(dataConfig.pathToPlayerDataFile))

const getPlayerForSleeperID = sleeperPlayerID => players[sleeperPlayerID]

export { getPlayerForSleeperID }
