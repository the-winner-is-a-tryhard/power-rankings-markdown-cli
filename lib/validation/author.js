import { createRequire } from 'module'
import { capitalizeOnlyFirstLetter } from '../utility/casing.js'

const require = createRequire(import.meta.url)
const colors = require('colors')
const emoji = require('node-emoji')

const authors = {
  Scottie: 'Scottie Enriquez',
  Callen: 'Callen Trail',
  Logan: 'Logan Richardson',
  Carl: 'Carl Meziere',
  Andrew: 'Andrew Carlough',
  John: 'John Yarrow',
  Matt: 'Matt Kniowski',
  Chris: 'Chris Ramsey',
  Caleb: 'Caleb Trantow',
  Travis: 'Travis James',
  Trond: 'Trond Liu',
  Mark: 'Mark Hamilton',
}

const validateAuthor = authorArgument => {
  const capitalizedArgument = capitalizeOnlyFirstLetter(authorArgument)
  if (authors[capitalizedArgument] !== undefined) {
    return authors[capitalizedArgument]
  }
  console.log(
    colors.red(
      emoji.emojify(
        ':x: Error: Author not found. Please enter a valid first name.'
      )
    )
  )
  console.log(colors.blue(authors))
  return undefined
}

export { validateAuthor }
