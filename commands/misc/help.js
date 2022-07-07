const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Butuh bantuan?'),
    async execute(interaction) {
        const menu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: 'Misc',
                            description: 'Daftar perintah mics',
                            value: 'misc',
                        },
                        {
                            label: 'Giveaway',
                            description: 'Daftar perintah giveaway',
                            value: 'ga',
                        }
                    ]),
            );

        await interaction.reply({ components: [menu] });

    },
};