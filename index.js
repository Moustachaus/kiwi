const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('message', message => {

    if (message.author.bot) return;


    if(splitMessage[0] === '!reglement') {
        message.reply("test")
        }





});

bot.login(process.env.token);