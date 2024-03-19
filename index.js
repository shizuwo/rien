const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});


const keepAlive = require('./server.js')
keepAlive()


client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1060793922063966289')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.
    .setURL('https://twitch.tv/Landry') // or your yt url
    .setState('Over the top! 🍖')
    .setName('Landry#0001')
    .setDetails('Landry#0001')
    //.setStartTimestamp(Date.now()) // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1107493547982196846/1113625912882249778/roof-piece-luffy.gif') //You can put links in tenor or discord and etc.
    //.setAssetsLargeText('') //Text when you hover the Large image
    //.setAssetsSmallImage('') //You can put links in tenor or discord and etc.
    //.setAssetsSmallText('') //Text when you hover the Small image
    .addButton('Bio', 'https://free-robux.click/landry')
    //.addButton('Button Name', 'Your Button URL')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline
})



const token = process.env['token'];
client.login(token);





















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
