const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const command = require("./command");

client.on("ready", () => {
  console.log("the client is ready");

  command(client, "ping", (message) => {
    message.channel.send("pong!");
  });
});

client.login(process.env.DJS_TOKEN);
