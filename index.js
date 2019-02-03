const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('message', message => {

    if (message.author.bot) return;


    if (message.content.startsWith("!reglement")) {

    
        message.delete
  }





});

bot.login(process.env.token);