import { gatsby } from '../config/gatsby.js'
import { awsConfig } from '../config/aws.js'

const generateMarkdown = (
  firstName,
  fullName,
  weekText,
  year,
  randomAdjective,
  leagueMembers,
  leagueRosters
) => {
  let markdown = `---
title: "${firstName}'s Week ${weekText} ${year} Power Rankings"
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
    const memberHeaderLine = `## ${trendingJSX} ${avatarHTML} ${leagueMemberDisplayName} | ${winLossRecord} | ${pointsFor}\n\nAdd your description here...\n\n`
    markdown += memberHeaderLine
  }
  return markdown
}

export { generateMarkdown }
