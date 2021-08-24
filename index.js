const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const command = require("./command");

client.on("ready", () => {
  console.log("The client is ready!");

  command(client, ["ping", "test"], (message, alias) => {
    message.channel.send(`${alias} chutya ha`);
  });

  command(client, "servers", (message) => {
    client.guilds.cache.forEach((guild) => {
      console.log(guild);
      message.channel.send(`${guild.name} has a total of ${guild.memberCount}`);
    });
  });

  command(client, ["cc", "clearchannel"], (message) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.messages.fetch().then((result) => {
        console.log(results);
        message.channel.bulkDelete(results);
      });
    }
  });
});

client.login(config.token);

// wifi password => irfanwifi123
