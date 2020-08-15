#!/usr/bin/env node
import { createRequire } from 'module'
import { authors } from '../lib/config/validAuthors.js'
import { weeks } from '../lib/config/validWeeks.js'
import { generateRandomAdjective } from '../lib/service/adjective.js'
import { capitalizeOnlyFirstLetter } from '../lib/service/casing.js'
import { validateAuthor } from '../lib/validation/author.js'
import { validateWeek } from '../lib/validation/week.js'
import { getLeagueMembers } from '../lib/league/sleeper.js'
import { generateMarkdown } from '../lib/service/markdown.js'

const require = createRequire(import.meta.url)
const program = require('commander')
const pckg = require('../package.json')

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
      generateMarkdown(
        normalizedAuthorFirstName,
        authors[normalizedAuthorFirstName],
        capitalizeOnlyFirstLetter(weeks[validatedWeekInteger]),
        generateRandomAdjective(),
        await getLeagueMembers()
      )
    }
  })
program.parse(process.argv)
