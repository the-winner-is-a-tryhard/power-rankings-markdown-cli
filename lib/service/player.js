import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const fs = require('fs')

// TODO: export to config
const playersFilePath =
  '/Users/scottenriquez/Documents/GitHub/power-rankings-markdown-cli/lib/data/players.json'
const players = JSON.parse(fs.readFileSync(playersFilePath))

const getPlayerForSleeperID = sleeperPlayerID => players[sleeperPlayerID]

export { getPlayerForSleeperID }
