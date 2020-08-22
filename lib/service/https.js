import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const axios = require('axios')
const colors = require('colors')
const emoji = require('node-emoji')

const httpGetData = (url, suppressConsoleMessage) => {
  if (!suppressConsoleMessage) {
    console.log(
      colors.green(
        emoji.emojify(
          `:rocket: Firing off an HTTP GET request to ${url} for data`
        )
      )
    )
  }
  return axios
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
}

const httpGetStream = async (url, suppressConsoleMessage) => {
  if (!suppressConsoleMessage) {
    console.log(
      colors.green(
        emoji.emojify(
          `:rocket: Firing off an HTTP GET request to ${url} for an avatar image`
        )
      )
    )
  }
  return axios({ url, method: 'GET', responseType: 'stream' })
}

export { httpGetData, httpGetStream }
