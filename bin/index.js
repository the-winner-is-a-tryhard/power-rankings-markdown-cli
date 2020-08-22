#!/usr/bin/env node
import { createRequire } from 'module'
import { gatsby } from '../lib/config/gatsby.js'
import { authors } from '../lib/config/validAuthors.js'
import { weeks } from '../lib/config/validWeeks.js'
import { generateRandomAdjective } from '../lib/service/adjective.js'
import { capitalizeOnlyFirstLetter } from '../lib/service/casing.js'
import { validateAuthor } from '../lib/validation/author.js'
import { validateWeek } from '../lib/validation/week.js'
import { getLeagueMembers, getLeagueRosters } from '../lib/league/sleeper.js'
import { generateMarkdown } from '../lib/service/markdown.js'
import {
  createNewPostDirectory,
  doesCurrentPathContainGatsbyConfig,
  writeMarkdownToFile,
} from '../lib/service/file.js'
import { downloadAvatars } from '../lib/service/image.js'
import { getCurrentGitBranchName } from '../lib/service/git.js'
import {
  createPathForGatsbyConfig,
  createNewPostDirectoryName,
  createPathForNewPostDirectory,
  createPathForMarkdownPost,
} from '../lib/service/path.js'

const require = createRequire(import.meta.url)
const program = require('commander')
const colors = require('colors')
const emoji = require('node-emoji')
const pckg = require('../package.json')

const presentWorkingDirectory = process.env.PWD

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
    const weekText = weeks[validatedWeekInteger]
    if (normalizedAuthorFirstName && validatedWeekInteger) {
      console.log(
        colors.green(
          emoji.emojify(
            `:white_check_mark: Generating Markdown for week ${weekText} post by ${normalizedAuthorFirstName}`
          )
        )
      )
      const currentGitBranchName = await getCurrentGitBranchName()
      const pathForGatsbyConfig = createPathForGatsbyConfig(
        presentWorkingDirectory
      )
      if (
        doesCurrentPathContainGatsbyConfig(
          presentWorkingDirectory,
          pathForGatsbyConfig
        ) &&
        currentGitBranchName &&
        currentGitBranchName !== gatsby.mainBranchName
      ) {
        const newPostDirectoryName = createNewPostDirectoryName(
          normalizedAuthorFirstName,
          weekText
        )
        const newPostDirectoryPath = createPathForNewPostDirectory(
          presentWorkingDirectory,
          newPostDirectoryName
        )
        createNewPostDirectory(presentWorkingDirectory, newPostDirectoryPath)
        const leagueMembers = await getLeagueMembers()
        const leagueRosters = await getLeagueRosters()
        await downloadAvatars(
          leagueMembers,
          weekText,
          normalizedAuthorFirstName
        )
        const markdownText = generateMarkdown(
          normalizedAuthorFirstName,
          authors[normalizedAuthorFirstName],
          capitalizeOnlyFirstLetter(weekText),
          generateRandomAdjective(),
          leagueMembers,
          leagueRosters
        )
        console.log(
          colors.green(
            emoji.emojify(`:mega: Echoing post preview\n${markdownText}`)
          )
        )
        const pathForMarkdownPost = createPathForMarkdownPost(
          newPostDirectoryPath
        )
        writeMarkdownToFile(pathForMarkdownPost, markdownText)
        console.log(
          colors.green(
            emoji.emojify(
              `:white_check_mark: Writing index.md to ${newPostDirectoryPath}`
            )
          )
        )
      } else {
        console.log(
          colors.red(
            emoji.emojify(
              `:x: This directory doesn't contain a Gatsby configuration file or is currently using the ${gatsby.mainBranchName} branch. Navigate to the TWIATH site directory (gatsby-frontend/TWIATH) and checkout a new branch.`
            )
          )
        )
        console.log(
          colors.red(
            emoji.emojify(
              `:open_file_folder: The current directory is ${presentWorkingDirectory}`
            )
          )
        )
        console.log(
          colors.red(
            emoji.emojify(
              `:x: The current Git branch is ${currentGitBranchName}`
            )
          )
        )
      }
    }
  })
program.parse(process.argv)
