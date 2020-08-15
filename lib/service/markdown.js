const generateMarkdown = (
  firstName,
  fullName,
  weekText,
  randomAdjective,
  leagueMembers
) => {
  let markdown = `
---
title: "${firstName}'s Week ${weekText} Power Rankings"
date: "${new Date().toISOString()}"
description: "${firstName}'s ${randomAdjective} power rankings."
author: "${fullName}"
tags: ["Power Rankings"]
---
`
  for (const member of leagueMembers) {
    if (member.metadata.team_name) {
      markdown += `
## <img class="sleeper-avatar" src="https://sleepercdn.com/avatars/thumbs/${member.avatar}" style="height: 25px; border-radius: 50%"/> ${member.metadata.team_name} (${member.display_name})
 
`
    } else {
      markdown += `
## <img class="sleeper-avatar" src="https://sleepercdn.com/avatars/thumbs/${member.avatar}" style="height: 25px; border-radius: 50%"/> ${member.display_name}  
`
    }
  }
  console.log(markdown)
}

export { generateMarkdown }
