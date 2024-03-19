const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const date = require('date-and-time');
const keepAlive = require('./server');



keepAlive();
const client = new Client({
    checkUpdate: false,
    syncStatus: false,
});

client.on('ready', () => {
	setInterval(() => {
	    const timenow = date.format(new Date(), 'hh:mm:ss A');
	    const r = new Discord.RichPresence()
	        .setApplicationId('1060793922063966289')
	        .setType('STREAMING')
	        .setURL('https://www.youtube.com/watch?v=U-l4ya3ejko')
	        .setState('Over the top! 🍖')
	        .setName('Landry#0001')
	        .setDetails(`Active [ ${timenow} ]`)
	        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1107493547982196846/1113625912882249778/roof-piece-luffy.gif')
	        .setAssetsLargeText(`Ping Server.... : ${Math.round(client.ws.ping)} ms`)
	        //.setAssetsLargeText('สถานะล็อคอินโปร : Working ✅')
	        //.setAssetsSmallImage('')
	        //.setAssetsSmallText('Bot')
	        //.setAssetsSmallText('Bot1')
	        .addButton('Bio', 'https://free-robux.click/landry')
	        //.addButton('__  [ - JOIN FOR TESTER - ] __', 'https://www.zxvc.xyz/discord');
	    client.user.setActivity(r);
		
		
		function generateRandomString(length) {
		  let result = '';
		  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		  const charactersLength = characters.length;
		  for (let i = 0; i < length; i++) {
		    result += characters.charAt(Math.floor(Math.random() * charactersLength));
		  }
		  return result;
		}


		
		client.settings.setCustomStatus({
		  status: null, // 'online' | 'idle' | 'dnd' | 'invisible' | null
		  text: generateRandomString(10) + " | " + generateRandomString(10) + " | " + generateRandomString(10), // String | null
		  emoji: null, // UnicodeEmoji | DiscordEmoji | null
		  expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
		});
		
		client.user.setHypeSquad('HOUSE_BRAVERY');
		client.user.setHypeSquad('HOUSE_BRILLIANCE');
		client.user.setHypeSquad('HOUSE_BALANCE');
	}, 500);
});

client.login("Token");