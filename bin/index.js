#!/usr/bin/env node
import { createRequire } from 'module'
import { validateAuthor } from '../lib/validation/author.js'

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
  .action((week, author) => {
    const normalizedAuthor = validateAuthor(author)
    if (normalizedAuthor) {
      console.log(normalizedAuthor)
    }
  })
program.parse(process.argv)
