import { createRequire } from 'module'
import { httpGetStream } from './https.js'
import { awsConfig } from '../config/aws.js'

const require = createRequire(import.meta.url)
const aws = require('aws-sdk')
const colors = require('colors')
const emoji = require('node-emoji')

const copyAvatarToCDN = async (avatarName, weekText, authorFirstName) => {
  try {
    const url = `https://sleepercdn.com/avatars/thumbs/${avatarName}`
    const response = await httpGetStream(url)
    const s3 = new aws.S3()
    const s3NewObjectKey = `${avatarName}-${weekText.toLowerCase()}-${authorFirstName.toLowerCase()}`
    const params = {
      Bucket: awsConfig.bucketName,
      Key: s3NewObjectKey,
      Body: response.data,
      ContentType: response.headers['content-type'],
    }
    console.log(
      colors.green(
        emoji.emojify(
          `:white_check_mark: Uploading ${s3NewObjectKey} to ${awsConfig.bucketName}`
        )
      )
    )
    return s3.upload(params).promise()
  } catch (error) {
    console.log(
      colors.red(
        emoji.emojify(
          `:x: Error when downloading avatar image and uploading to CDN: ${error}`
        )
      )
    )
  }
}

const downloadAvatars = async (leagueMembers, week, author) => {
  for (const member of leagueMembers) {
    if (member.avatar) {
      await copyAvatarToCDN(member.avatar, week, author)
    }
  }
}

export { downloadAvatars }
