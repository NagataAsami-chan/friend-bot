const Discord = require('discord.js');

const { Player } = require('discord-player');

const { MessageAttachment, MessageEmbed } = require('discord.js');

const client = new Discord.Client();

const prefix = '``'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandsFile = fs.readdirSync('./command/').filter(file => file.endsWith('.js'));
for (const file of commandsFile) {
    const command = require(`./command/${file}`)
    client.commands.set(command.name, command)
}

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
        message.channel.send('nice to meet you How are you today')
    }
    if (command == 'iamfine') {
        message.channel.send('Nice')
    }
    
    if (command == 'bye') {
        message.channel.send('Stay with me please')
    }
    if (command == 'thankyou') {
        message.channel.send('No worries')
    }
    if (command == 'me') {
        message.channel.send('I am here How can I help you')
    }
    
    if (command == 'lazy') {
        message.channel.send('Sorry everone Im too lazy thats why I type commend ')
    }
    if (command == 'cld') {
        message.channel.send('Clam down!!')
    }
    if (command == 'talktome') {
        message.channel.send('Why not!!')
    }
    if (command == 'canitalktoyou') {
        message.channel.send('Why not!!')
    }
    if (command == 'youaresokind') {
        message.channel.send('thankyou >-<')
    }
    if (command == 'youaresocute') {
        message.channel.send('thankyou >-<')
    }
    if (command == 'whereisalvis') {
        message.channel.send('He will be back soon. You can talk to me if you want as well!!')
    }
    if (command == 'deklink') {
        message.channel.send('https://discord.gg/DsG9YmVptw')
    }
    if (command == 'whoareyou') {
        message.channel.send('I am Hizuki Yui ')
    }
    if (command == 'ok') {
        message.channel.send('>~<')
    }
    if (command == 'mylink') {
        message.channel.send('https://discord.gg/Ypce73WqNy')
    }
    if (command == 'play') {
        client.commands.get('play').execute(message, args)
    }
    if (command == 'join') {
        if(!message.member.voice.channel) return message.channel.send("Please join voice channel first");
        message.member.voice.channel.join(); 
    }
    if (command == 'leave') {
        if(!message.guild.me.voice.channel) return message.channel.send("only can leave if I join ");
        message.guild.me.voice.channel.leave();  
    }
});
client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

client.on('ready', () => {
    client.user.setActivity(`youtube music`, { type: "Playing" })
});
//10 commend in total 


client.login(process.env.token); //The bot token which have setted in heroku
