module.exports = {
	config: {
		name: "goiadmin",
		author: "BaYjid",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100005193854879") {
		var aid = ["100005193854879"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["-𝐁𝐎𝐒𝐒 𝐈𝐬 𝐁𝐮𝐬𝐲 𝐍𝐚𝐰-♦ ","♦-𝐁𝐨𝐬𝐬 𝐓𝐀𝐍𝐕𝐈𝐑 𝐢𝐬 𝐧𝐨𝐰 𝐨𝐧 𝐩𝐨𝐠𝐫𝐚𝐦...𝐭𝐞𝐥𝐥 𝐦𝐞 𝐰𝐡𝐚𝐭𝐞𝐯𝐞𝐫 𝐭𝐨 𝐬𝐚𝐲-♦","-𝐁𝐨𝐬𝐬 𝐓𝐚𝐧𝐯𝐢𝐫'𝐬 𝐡𝐞𝐚𝐝 𝐢𝐬 𝐯𝐞𝐫𝐲 𝐡𝐨𝐭 𝐧𝐨𝐰_//-🍾🥴🥵","-𝐖𝐡𝐲 𝐝𝐨 𝐲𝐨𝐮 𝐠𝐢𝐯𝐞 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐚𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧 𝐭𝐨 𝐭𝐡𝐞 𝐛𝐨𝐬𝐬?_😾🔪","-𝐓𝐀𝐍𝐕𝐈𝐑 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐧 𝐨𝐫𝐝𝐢𝐧𝐚𝐫𝐲 𝐩𝐞𝐫𝐬𝐨𝐧, 𝐡𝐞 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐟𝐚𝐭𝐡𝐞𝐫_//-😵😇\n𝐎𝐊𝐄𝐘 𝐁𝐁𝐘_😊"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
