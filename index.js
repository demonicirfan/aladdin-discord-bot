const Discord = require("discord.js");
const client = new Discord.Client();

//const config = require("./config.json");

client.on("ready", () => {
  console.log("the client is ready");
});

client.login(process.env.DJS_TOKEN);
