const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
    if(msg.channel.type == "dm"){
       console.log(msg.author.username, msg.content); 
    }
});

client.login(process.env.DISCORD_TOKEN);
