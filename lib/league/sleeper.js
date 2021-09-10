import { league } from '../config/league.js'
import { httpGetData } from '../service/https.js'

const getLeagueMembers = async suppressConsoleMessage => {
  const url = `https://api.sleeper.app/v1/league/${league.id}/users`
  return httpGetData(url, suppressConsoleMessage)
}

const getLeagueRosters = async suppressConsoleMessage => {
  const url = `https://api.sleeper.app/v1/league/${league.id}/rosters`
  return httpGetData(url, suppressConsoleMessage)
}

const getLeagueMatchups = async (week, suppressConsoleMessage) => {
  const url = `https://api.sleeper.app/v1/league/${league.id}/matchups/${week}`
  return httpGetData(url, suppressConsoleMessage)
}

export { getLeagueMembers, getLeagueRosters, getLeagueMatchups }
