const { SlashCommandBuilder, ChannelType, MessageEmbed, PermissionsBitField } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('maintenance')
        .setDescription('Schedule a maintenance announcement to a specified channel')
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('Select a channel')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText)
                .addChannelTypes(ChannelType.GuildNews))
        .addStringOption(option =>
            option.setName('server')
                .setDescription('Server name')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('time')
                .setDescription('Time of the maintenance')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for the maintenance')
                .setRequired(true)),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkUserPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;
    },
};
