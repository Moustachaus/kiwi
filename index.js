const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {

    if (message.author.bot) return;


    if (message.content.startsWith("!reglement")) {
        message.channel.send("test");
  }





});

bot.login(process.env.token);