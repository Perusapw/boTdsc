const Discord = require('discord.js');

module.exports = {
    async execute(client, channel, server, time, reason) {
        // Membuat pesan pengumuman maintenance
        const message = `# MAINTENANCE\n\nServer: ${server}\nTime: ${time}\nReason: ${reason}`;

        // Mengirim pengumuman maintenance ke channel yang ditentukan
        if (channel && channel.isText()) {
            await channel.send(message);
            return { 
                success: true,
                message: `Maintenance announcement has been sent to ${channel}.`
            };
        } else {
            return { 
                success: false,
                message: 'Selected channel is not valid.'
            };
        }
    },
};

 
