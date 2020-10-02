import { createRequire } from 'module'
import { gatsby } from '../config/gatsby.js'
import { awsConfig } from '../config/aws.js'
import { getPlayerForSleeperID } from './player.js'

const require = createRequire(import.meta.url)
const markdownTable = require('markdown-table')

const generateMarkdown = async (
  firstName,
  fullName,
  weekText,
  randomAdjective,
  leagueMembers,
  leagueRosters,
  leagueMatchups
) => {
  let markdown = `---
title: "${firstName}'s Week ${weekText} Power Rankings"
date: "${new Date().toISOString()}"
description: "${firstName}'s ${randomAdjective} power rankings."
author: "${fullName}"
tag: "Power Rankings"
---

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons"
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons"


`
  for (const roster of leagueRosters.sort(
    (first, second) => second.settings.fpts - first.settings.fpts
  )) {
    const leagueMember = leagueMembers.find(
      member => member.user_id === roster.owner_id
    )
    const currentMatchup = leagueMatchups.find(
      matchup => matchup.roster_id === roster.roster_id
    )
    const trendingJSX = `<FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} />`
    const avatarHTML = leagueMember.avatar
      ? `<img src="${awsConfig.cdnURLBase}/${
          leagueMember.avatar
        }-${weekText.toLowerCase()}-${firstName.toLowerCase()}" class="${
          gatsby.avatarHTMLClass
        }"/>`
      : ''
    const leagueMemberDisplayName = leagueMember.metadata.team_name
      ? leagueMember.metadata.team_name
      : leagueMember.display_name
    const winLossRecord = `${roster.settings.wins}-${roster.settings.losses}W/L`
    const pointsFor = `${roster.settings.fpts}PF`
    const memberHeaderLine = `## ${trendingJSX} ${avatarHTML} ${leagueMemberDisplayName} | ${winLossRecord} | ${pointsFor}\n\n`
    markdown += memberHeaderLine
    markdown += `### Week ${weekText} Points: ${currentMatchup.points}\n\n`
    const tableList = [['Name', 'Team', 'Depth']]
    for (const startingPlayerID of currentMatchup.starters) {
      const player = await getPlayerForSleeperID(startingPlayerID)
      tableList.push([
        `${player.first_name} ${player.last_name}`,
        `${player.team}-${player.position}`,
        player.depth_chart_order
          ? `${player.depth_chart_order} ${
              player.injury_status ? `(${player.injury_status.charAt(0)})` : ''
            }`
          : '',
      ])
    }
    markdown += `${markdownTable(tableList)}`
    markdown += `\n\nAdd your description here...\n\n`
  }
  return markdown
}

export { generateMarkdown }
