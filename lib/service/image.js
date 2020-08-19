import { downloadAvatar } from './file.js'

const downloadAvatars = async (leagueMembers, newPostDirectory) => {
  for (const member of leagueMembers) {
    await downloadAvatar(member.avatar, newPostDirectory)
  }
}

export { downloadAvatars }
