module.exports = {
    app: {
        px: '``',
        playing: 'what the'
    },

    opt: {
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
