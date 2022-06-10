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
    if (command == 'me') {
        message.channel.send('I am here How can I help you')
    }
    if (command == 'n') {
        message.channel.send('nice')
    }
    if (command == 'g') {
        message.channel.send('gg')
    }
    
    if (command == 'lazy') {
        message.channel.send('Sorry everone Im too lazy thats why I type commend ')
    }
});

//Hello
client.login(process.env.token); //The bot token which have setted in heroku
