const Discord = require('discord.js');

const { MessageAttachment, MessageEmbed } = require('discord.js');

const client = new Discord.Client();

const prefix = '!!'


client.once('ready', () => {
    //Write logs when the bot is up
    console.error('maybe the bot is ready, just maybe...')
    console.log('Asami is online?');
});


client.on('message', message =>{
    // The command startwith prefix setting
    if(!message.content.startsWith(prefix || message.author.bot || '!n')) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //Command start here
    if (command == 'ping') {
        message.channel.send('ping')
    };
    if (command == 'hello') {
        message.channel.send('nice to meet you')
    }
    if (command == 'bye') {
        message.channel.send('Stay with me please')
    }
    if (command == 'thankyou') {
        message.channel.send('No worries')
    }
    if (command == 'DoYouLikeDekkson') {
        message.channel.send('No he is gay')
    }
    if (command == 'join') {
        if(!message.member.voice.channel) return message.channel.send("join vc first");
        message.member.voice.channel.join(); 
    }
    if (command == 'leave') {
        if(!message.guild.me.voice.channel) return message.channel.send("I'm not in ");
        message.guild.me.voice.channel.leave();  
    }
});

client.on('ready', () => {
    client.user.setActivity(`me getting tested`, { type: "WATCHING" })
});

//Hello
client.login('OTg0NzA1MDg0ODE2NTIzMzI2.G_on4w.wre2zfjdAqlj_CW7a7xQED7Yn3SqbtcMLi-ob8'); //The bot token which have setted in heroku
