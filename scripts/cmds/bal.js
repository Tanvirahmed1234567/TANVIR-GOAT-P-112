module.exports = {
 config: {
	 name: "bal",
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
 if (event.body && event.body.toLowerCase() === "bal") {
 return message.reply({
 body: " 「-♦ 𝐅𝐔𝐂𝐊 𝐘𝐎𝐔 😰🖕\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝐓𝐀𝐍𝐕𝐈𝐑 𝐀𝐇𝐌𝐄𝐃♦-」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/SBupaKE.jpeg")
 });
 }
 }
}
