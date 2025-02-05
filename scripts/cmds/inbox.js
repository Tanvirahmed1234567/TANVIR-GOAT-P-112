module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "1.0",
    author: "B4YJ1D",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "okh enjoy @b4yj1d cmd"
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("🌐-𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐒𝐄𝐍𝐃 𝐌𝐒𝐆\n\n🚫-𝐏𝐋𝐄𝐀𝐒𝐄 𝐂𝐊 𝐘𝐎𝐔𝐑 𝐈𝐍𝐁𝐎𝐗 𝐎𝐑 𝐌𝐒𝐆 𝐑𝐄𝐐𝐔𝐄𝐒𝐓 𝐁𝐎𝐗-🚫", event.threadID);
      api.sendMessage("-♦𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐀𝐋𝐋𝐎𝐖♦-\n🌐-𝐍𝐎𝐖 𝐘𝐎𝐔 𝐂𝐀𝐍 𝐔𝐒𝐄-♦𝐓𝐀𝐍𝐕𝐈𝐓 𝐁𝐎𝐓♦-𝐇𝐄𝐑𝐄", event.senderID);
    } catch (error) {
      console.error("Error bro: " + error);
    }
  }
}
