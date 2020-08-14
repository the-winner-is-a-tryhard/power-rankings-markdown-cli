const generateMarkdown = (firstName, fullName, weekText, leagueMembers) => {
  let markdown = `
---
title: ${firstName}'s Week ${weekText} Power Rankings 
date: "${Date.now()}"
description: "${firstName}'s insightful power rankings."
author: "${fullName}"
tags: ["Power Rankings"]
---
`
  for (const member of leagueMembers) {
    markdown += `
## ${member.display_name}    
`
  }
  console.log(markdown)
}

export { generateMarkdown }
