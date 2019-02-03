const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {

    if (message.author.bot) return;


    if (message.content.startsWith("!reglement")) {
        var reglement = new Discord.RichEmbed()
            .setTitle("Règlements !")
            .setDescription("Voici les règlements")
            .addField("**abc:", "abc", true)
            .setColor("0xE61919")
            .setFooter("Kiwi")
    

        message.channel.sendEmbed(reglement);

        message.delete
  }





});

bot.login(process.env.token);