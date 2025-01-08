const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐓𝐀𝐍𝐕𝐈𝐑 𝐀𝐇𝐌𝐄𝐃 ',
      gender: '𝐌𝐚𝐥𝐞_//-',
      age: '18+',
      height: ' 𝐊𝐎𝐌𝐎 𝐍𝐀_//-🫣 ',
      facebookLink: '𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦./𝐭𝐚𝐧𝐯𝐢𝐫.𝐚𝐡𝐦𝐞𝐝.112',
      nick: '(𝐃𝐈𝐏𝐓𝐎)'
    };

    const bold = 'https://i.imgur.com/doMOOMF.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `●❯────────────────❮●\n
𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧:🧾
𝐍𝐚𝐦𝐞: ${ownerInfo.name}
𝐆𝐞𝐧𝐝𝐞𝐫: ${ownerInfo.gender}
𝐀𝐠𝐞: ${ownerInfo.age}
𝐇𝐞𝐢𝐠𝐡𝐭: ${ownerInfo.height}
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ${ownerInfo.facebookLink}
𝐍𝐢𝐜𝐤: ${ownerInfo.nick}\n
●❯────────────────❮●`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
