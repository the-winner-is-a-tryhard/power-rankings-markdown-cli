import { league } from '../config/sleeperLeague.js'
import { httpGet } from '../service/https.js'

const getLeagueMembers = async () => {
  const url = `https://api.sleeper.app/v1/league/${league.id}/users`
  return httpGet(url)
}

const getLeagueRosters = async () => {
  const url = `https://api.sleeper.app/v1/league/${league.id}/rosters`
  return httpGet(url)
}

export { getLeagueMembers, getLeagueRosters }