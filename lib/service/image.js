import { createRequire } from 'module'
import { awsConfig } from '../config/aws.js'

const require = createRequire(import.meta.url)
const aws = require('aws-sdk');
const axios = require('axios')

const downloadAvatars = async (leagueMembers, week, author) => {
  for (const member of leagueMembers) {
    if(member.avatar) {
      await copyAvatarToCDN(member.avatar, week, author)
    }
  }
}

// TODO: make more generic by pulling URL out to image.js
// TODO: add console logging
const copyAvatarToCDN = async (avatarName, week, author) => {
  const url = `https://sleepercdn.com/avatars/thumbs/${avatarName}`
  console.log(url)
  const response = await axios({ url, method: 'GET', responseType: 'stream' });
  const s3 = new aws.S3()
  const params = {
    Bucket: awsConfig.bucketName,
    Key: `${avatarName}-${week.toLowerCase()}-${author.toLowerCase()}`,
    Body: response.data,
    ContentType: response.headers['content-type'],
  }
  return s3.upload(params).promise()
}

export { downloadAvatars }
