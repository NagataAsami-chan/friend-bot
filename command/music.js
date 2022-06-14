const ytdl = require('play-dl');
const ytSearch = require('yt-search');
const { VoiceChannel } = require('discord.js');

module.exports = {
    name: 'play',
    async execute(message, args) {
        // const vc = message.member.voice.channel;
        // if (!args.length) return message.channel.send('???')

        // const findMusic = async (query) => {
        //     const result = await ytSearch (query) ;
        //     return (result.videos.length > 1) ? result.videos[0] : null
        // }
        // const music = await findMusic(args.join(' '))

        // const connection = await vc.join()

        // if (music) {
        //     const stream = ytdl(music.url, {filter: 'audioonly'})
        //     connection.play(await stream, {type: 'opus'})
            
        //     await message.reply(`Now playing ${music.title}`)
        // } else message.channel.send('no video found')
        if (!message.member.voice?.channel) return message.channel.send('Connect to a Voice Channel')
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })

        let yt_info = await play.search(args, {
            limit: 1
        })
        
        let stream = await play.stream(yt_info[0].url)
        
        let resource = createAudioResource(stream.stream, {
            inputType: stream.type
        })
        let player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Play
            }
        })

        
        player.play(resource)
        connection.subscribe(player)
        }
    }
