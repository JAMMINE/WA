'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    console.log(`Hello world!`);
});
// Create an event listener for messages
client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }
});

client.login("Njg5NjY3OTUzMzAxNTIwNTA4.XnGahA.Hm4JbkRd3eNYkNVz6e6fR3eeQ0o");

