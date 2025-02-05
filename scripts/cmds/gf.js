module.exports = {
 config: {
	 name: "gf",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "gf") {
 return message.reply({
 body: " 「 👅-𝐅𝐔𝐂𝐊 𝐁𝐑𝐎-🫦\n\n𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑:-\n-♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐀𝐇𝐌𝐄𝐃♦-」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/NZT8dEF.mp4")
 });
 }
 }
}
