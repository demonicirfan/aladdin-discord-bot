const { prefix } = require("./config.json");

module.exports = (client, aliases, callback) => {
  //aliases = ["ping", "test"]
  if (typeof aliases === "string") {
    aliases = [aliases];
  } 
  //alias is what are the commands
  //message is what the user has sent with prefix

  client.on("message", (message) => { //message = !adi
    const { content } = message; // !adi  --> content = !adi

    aliases.forEach((alias) => { //for each element in alias it will check eg ping and test
      const command = `${prefix}${alias}`; //1. command = !ping

      if (content.startsWith(`${command} `) || content === command) {
        console.log(`Running the command ${command}`);
        callback(message, alias);
      }
    });
  });
};
