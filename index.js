const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('message', message => {

    if (message.author.bot) return;


    if(splitMessage[0] === '!reglement') {
        var reglement = new Discord.RichEmbed()
            .setTitle("Règlements")
            .setDescription("Voici les règlements")
            .addField("abc", "abc", true)
            .setColor("0x42D321")
            .setFooter("kiwi")





        message.channel.sendEmbed(reglement);
        }





});

bot.login("NTQxNjA4NDIyNTg0NDgzODQx.Dzh7xg.HA_DA_2VKsv5rvKvcpeCxKtBsi4");