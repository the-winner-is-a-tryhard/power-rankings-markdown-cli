#!/usr/bin/env node
import { createRequire } from 'module'
import { authors } from '../lib/config/validAuthors.js'
import { weeks } from '../lib/config/validWeeks.js'
import { generateRandomAdjective } from '../lib/service/adjective.js'
import { capitalizeOnlyFirstLetter } from '../lib/service/casing.js'
import { validateAuthor } from '../lib/validation/author.js'
import { validateWeek } from '../lib/validation/week.js'
import { getLeagueMembers, getLeagueRosters } from '../lib/league/sleeper.js'
import { generateMarkdown } from '../lib/service/markdown.js'
import { doesCurrentPathContainGatsbyConfig } from '../lib/service/file.js'

const require = createRequire(import.meta.url)
const program = require('commander')
const pckg = require('../package.json')
const colors = require('colors')
const emoji = require('node-emoji')

program.version(pckg.version)
program
  .command('new <week> <author>')
  .alias('n')
  .description(
    'Create a new power ranking Markdown post with Sleeper data for a given week.'
  )
  .action(async (week, author) => {
    const normalizedAuthorFirstName = validateAuthor(author)
    const validatedWeekInteger = validateWeek(parseInt(week))
    if (normalizedAuthorFirstName && validatedWeekInteger) {
      console.log(
        colors.green(
          emoji.emojify(
            `:white_check_mark: Generating Markdown for week ${weeks[validatedWeekInteger]} post by ${normalizedAuthorFirstName}`
          )
        )
      )
      if (doesCurrentPathContainGatsbyConfig()) {
        const markdownText = generateMarkdown(
          normalizedAuthorFirstName,
          authors[normalizedAuthorFirstName],
          capitalizeOnlyFirstLetter(weeks[validatedWeekInteger]),
          generateRandomAdjective(),
          await getLeagueMembers(),
          await getLeagueRosters()
        )
        console.log(
          colors.green(
            emoji.emojify(`:mega: Echoing post preview\n${markdownText}`)
          )
        )
      } else {
        console.log(
          colors.red(
            emoji.emojify(
              `:x: This directory doesn't contain a Gatsby configuration file. Navigate to the TWIATH site directory (gatsby-frontend/TWIATH).`
            )
          )
        )
      }
    }
  })
program.parse(process.argv)
