const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝐓𝐀𝐍𝐕𝐈𝐑 𝐀𝐇𝐌𝐄𝐃 ";
		const ownAge = " __18+__";
		const messenger = "𝐡𝐭𝐭𝐩𝐬://𝐦.𝐦𝐞/61567467803735";
		const authorFB = "𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐭𝐚𝐧𝐯𝐢𝐫.112";
		const authorNumber = "_01323850908";
		const Status = "-𝐊𝐈𝐒𝐎 𝐁𝐎𝐋𝐀𝐑 𝐍𝐀𝐈-";
		const urls = [
"https://i.imgur.com/yja0VGP.jpeg",
"https://i.imgur.com/dCDyEVS.jpeg",
"https://i.imgur.com/yja0VGP.jpeg",
"https://i.imgur.com/dCDyEVS.jpeg"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `●❯────────────────❮●\n《__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__》\n●❯────────────────❮●
\🤖𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: ${global.GoatBot.config.nickNameBot}__⩸
\👾𝐁𝐎𝐓 𝐒𝐘𝐒𝐓𝐄𝐌 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.GoatBot.config.prefix}
\💙 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: ${authorName}
\📝𝐀𝐆𝐄  : ${ownAge}
\💕𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: ${Status}
\🌐𝐖𝐏 : ${authorNumber}
\🌍𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 : ${authorFB}
\🗓𝐃𝐀𝐓𝐄 : ${date}
\⏰𝐍𝐎𝐖 𝐓𝐈𝐌𝐄 : ${time}
\🔰𝐀𝐍𝐘 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 :⩸__${messenger}__⩸
\📛𝐁𝐎𝐓 𝐈'𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐅𝐎𝐑 : ${uptimeString}
    𝐓𝐆: 𝐡𝐭𝐭𝐩𝐬://𝐭.𝐦𝐞/𝐭𝐚𝐧𝐯𝐢𝐫𝐚𝐡𝐦𝐞𝐝
    𝐈𝐍𝐒𝐓𝐀: 𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦.𝐜𝐨𝐦/𝐭𝐚𝐧𝐯𝐢_𝐫___112?
    𝐓𝐢𝐤𝐭𝐨𝐤: 𝐁𝐀𝐋 𝐔𝐒𝐄 𝐊𝐎𝐑𝐈 𝐍𝐀🥴
    𝐘𝐨𝐮𝐓𝐨𝐮𝐛: 𝐡𝐭𝐭𝐩𝐬://𝐲𝐨𝐮𝐭𝐮𝐛𝐞.com/@𝐭𝐚𝐧𝐯𝐢𝐫_𝐚𝐡𝐦𝐞𝐝?\n●❯────────────────❮●
\=`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
