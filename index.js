// Pre-setup

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// Log on

client.on("ready", () =>{ // Shows that the bot is ready.
    console.log(`Logged in as ${client.user.tag}!`); // Logs in the bot - present in the console
    client.user.setActivity('the Teddy Bear Gang | t!help for help!', { type: 'WATCHING' }) // Can be seen visibily via Discord
  .then(presence => console.log(`TeddyMod is watching ${presence.activities[0].name}`)) // Present in the console
  .catch(console.error); // Catches errors
});

// Beginning of commands

// Help command

client.on('message', message => {
	if (message.content === `${prefix}help`) {
		message.channel.send('> **Help Commands for <@815429840332652555>** \n \n :warning: **Please note that these commands may be updated! \n \n `!help` :construction: **Shows this command** \n `!ban` :no_entry_sign: **Bans the mentioned user \n `!kick` :leg: Kicks the mentioned user \n `!warn` :warning: Warns the user \n `t!mute` :mute: Mutes the mentioned user');
    console.log(`${message.member.user.tag} ran the t!help command successfully.`)
	}
});

// Bot client login (using the code from the config.json)

client.login(token);