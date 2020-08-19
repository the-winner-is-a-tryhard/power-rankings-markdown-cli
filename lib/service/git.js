import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { execSync } = require('child_process')
const colors = require('colors')
const emoji = require('node-emoji')

const getCurrentGitBranchName = () => {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString()
  } catch (error) {
    console.log(
      colors.red(
        emoji.emojify(`:x: Error when checking Git repository name: ${error}`)
      )
    )
    return null
  }
}

export { getCurrentGitBranchName }
