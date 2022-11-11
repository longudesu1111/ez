const discord = require('discord.js');
const client = new discord.Client({ intents: [] });

client.on('ready', client => {
	const ping = new discord.SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!');

	new discord.REST({ version: '10' }).setToken(process.env.token).put(discord.Routes.applicationCommands(client.user.id), { body: [ping.toJSON()] });
});

client.on('interactionCreate', interaction => {
    return interaction.reply({
      content: 'Pong!'
    });
});

client.login("MTA0MDY1ODkzMDM3Mzc2MzE2Mg.GOnt4K.2UUSMdubDPV7TSuxnLczEM7bkAHVEHFcsJ6i0o");
