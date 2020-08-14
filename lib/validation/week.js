import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const colors = require('colors')
const emoji = require('node-emoji')

const validateWeek = (weekArgument, suppressErrorMessage) => {
  if (!Number.isInteger(weekArgument)) {
    if (!suppressErrorMessage) {
      console.log(
        colors.red(emoji.emojify(':x: Error: Week must be an integer'))
      )
    }
    return null
  }
  if (weekArgument < 0 || weekArgument > 17) {
    if (!suppressErrorMessage) {
      console.log(
        colors.red(
          emoji.emojify(
            ':x: Error: Week must greater than or equal to 0 and less than or equal to 17'
          )
        )
      )
    }
    return null
  }
  return weekArgument
}

export { validateWeek }
