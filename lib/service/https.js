import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const axios = require('axios')
const colors = require('colors')
const emoji = require('node-emoji')

const httpGet = url =>
  axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(
        colors.red(
          emoji.emojify(
            `:x: Error: Unable to make an HTTP GET request to ${url}. See the exception below:`
          )
        )
      )
      console.log(colors.blue(error))
      return null
    })

export { httpGet }
