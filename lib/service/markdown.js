const generateMarkdown = (
  firstName,
  fullName,
  weekText,
  randomAdjective,
  leagueMembers,
  leagueRosters
) => {
  let markdown = `
---
title: "${firstName}'s Week ${weekText} Power Rankings"
date: "${new Date().toISOString()}"
description: "${firstName}'s ${randomAdjective} power rankings."
author: "${fullName}"
tag: "Power Rankings"
---
`
  for (const member of leagueMembers) {
    const avatarHTML = member.avatar
      ? `<img class="sleeper-avatar" src="./${member.avatar}.png" />`
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
