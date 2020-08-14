import { createRequire } from 'module'
import { capitalizeOnlyFirstLetter } from '../service/casing.js'
import { authors } from '../config/validAuthors.js'

const require = createRequire(import.meta.url)
const colors = require('colors')
const emoji = require('node-emoji')

const validateAuthor = (authorArgument, suppressErrorMessage) => {
  const capitalizedArgument = capitalizeOnlyFirstLetter(authorArgument)
  if (authors[capitalizedArgument]) {
    return capitalizedArgument
  }
  if (!suppressErrorMessage) {
    console.log(
      colors.red(
        emoji.emojify(
          ':x: Error: Author not found. Please enter a valid first name.'
        )
      )
    )
    console.log(colors.blue(authors))
  }
  return undefined
}

export { validateAuthor }
