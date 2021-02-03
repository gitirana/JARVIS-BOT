"use strict";

const { Client, MessageEmbed } = require("discord.js");
const config = require("../config.json");

const client = new Client();

const prefix = "!";
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  // if (command === "ping") {
  //   const timeTaken = Date.now() - message.createdTimestamp;
  //   message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  // } else if (command === "help") {
  //   message.channel.send(
  //     "!ping -- Shows how long it took to respond to that message."
  //   );
  // }

  if (command === "test") {
    message.channel.send("testado");
  }

  if (command === "help") {
    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setAuthor(
        "J.A.R.V.I.S",
        "https://imgur.com/TwfbhPg",
        "https://github.com/gitirana/JARVIS-BOT"
      )
      .setDescription(
        "J.A.R.V.I.S is a discord bot made with Node.js to help users use the platform."
      )
      .setThumbnail("https://imgur.com/TwfbhPg")
      .addFields({ name: "Commands", value: "!ping" })
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );

  if (!channel) return;

  channel.send(
    `Welcome to the server, ${member} 🎉🎉!\nTo list my commands type !help`
  );
});

client.login(config.BOT_TOKEN);
