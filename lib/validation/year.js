import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const colors = require('colors')
const emoji = require('node-emoji')

const validateYear = (yearArgument, suppressErrorMessage) => {
  if (!Number.isInteger(yearArgument)) {
    if (!suppressErrorMessage) {
      console.log(
        colors.red(emoji.emojify(':x: Error: Year must be an integer'))
      )
    }
    return null
  }
  if (yearArgument < 2020 || yearArgument > 2100) {
    if (!suppressErrorMessage) {
      console.log(
        colors.red(
          emoji.emojify(
            ':x: Error: Year must be greater than 2020 and less than 2100'
          )
        )
      )
    }
    return null
  }
  return yearArgument
}

export { validateYear }
