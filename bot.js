const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
    if(msg.channel.type == "dm"){
       console.log(getTime(), msg.author.username, msg.content); 
    }
});

client.login(process.env.DISCORD_TOKEN);

function getTime(){
  const currentdate = new Date(); 
  const datetime = "["+ currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds()+"]";
return datetime;
}
