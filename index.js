const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('message', message => {

    if (message.author.bot) return;


    if (message.content.startsWith("!reglement")) {
        var reglement = new Discord.RichEmbed()
        .setTitle("Règlements !")
        .setDescription("Voici les règlements" + member.user.username)
        .addField("**abc: **", "abc", false)
        .setColor("0xE61919")
        .setFooter("Kiwi")
    
  }





});

bot.login(process.env.token);