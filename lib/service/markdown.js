import { gatsby } from '../config/gatsby.js'
import { awsConfig } from '../config/aws.js'

const generateMarkdown = (
  firstName,
  fullName,
  weekText,
  randomAdjective,
  leagueMembers,
  leagueRosters
) => {
  let markdown = `---
title: "${firstName}'s Week ${weekText} Power Rankings"
date: "${new Date().toISOString()}"
description: "${firstName}'s ${randomAdjective} power rankings."
author: "${fullName}"
tag: "Power Rankings"
---
`
  for (const member of leagueMembers) {
    const avatarHTML = member.avatar
      ? `<img src="${awsConfig.cdnURLBase}/${
          member.avatar
        }-${weekText.toLowerCase()}-${firstName.toLowerCase()}" class="${
          gatsby.avatarHTMLClass
        }"/>`
      : ''
    const leagueMemberDisplayName = member.metadata.team_name
      ? member.metadata.team_name
      : member.display_name
    const memberRoster = leagueRosters.find(
      roster => roster.owner_id === member.user_id
    )
    const winLossRecord = `${memberRoster.settings.wins}-${memberRoster.settings.losses}W/L`
    const pointsFor = `${memberRoster.settings.fpts}PF`
    const memberHeaderLine = `## ${avatarHTML} ${leagueMemberDisplayName} | ${winLossRecord} | ${pointsFor}\n\n`
    markdown += memberHeaderLine
  }
  return markdown
}

export { generateMarkdown }
