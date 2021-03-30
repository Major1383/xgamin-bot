const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const { config } = require('process');
client.commands = new Discord.Collection();



client.on('ready', () => {
  console.log(`Persona bot Bot Is Ready! ${client.user.tag}!`);
});

client.on("ready", () => {
    function chNickname() {
        const targetguild = client.guilds.cache.get("824740444360409108")
        const me = targetguild.members.cache.get(client.user.id)
        let name = [`Tutal Users: ${guild.memberCount}`,'✗owner\nbot Spyx']
        for (let i = 0; i < name.length; i++)
          me.setNickname(name[i])
      }; setInterval(chNickname, 10000)
    

  client.user.setStatus('online')
  const guild = client.guilds.cache.get("824740444360409108");
  let status_num = 0
  setInterval(function () {
    if (status_num == 0) {
      client.user.setActivity('+help', { type: "WATCHING" })
      status_num += 1;
    }
    else {
      client.user.setActivity('Created By Major', { type: "PLAYING" });
      status_num = 0;
    }
  }, 3000);


  //PingBot
  client.on('message', message => {
    if (message.content.toLowerCase() === `${prefix}ping`) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Ping Bot 🐱‍🏍 : ${Math.round(message.client.ws.ping)}`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(embed);
    }
  });

  //join voice 
  const channel = client.channels.cache.get("825715637124202588");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
    // Self Deafen
    connection.voice.setSelfDeaf(true);

  }).catch(e => {

    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});

//embed 
client.on('message', message => {
  // If the message is "how to embed"

  if (message.content.toLowerCase() === `${prefix}help`) {
    const embed = new Discord.MessageEmbed()

      .setColor('#0099ff')//color
      .setTitle('Command List')
      //.setURL('https://discord.gg/3MDur5mRsA')
      .setAuthor('Persona Bot ', 'https://cdn.discordapp.com/attachments/816307719736262696/825081981510615050/catch-a-rainbow-royalty-free-image-1608325478.jpeg', 'https://discord.gg/JW4xySbTGP')
      .setDescription('👇👇👇قابلیت های بات پرسنا ...👇👇👇')
      .setThumbnail('https://media.discordapp.net/attachments/816307719736262696/825081981510615050/catch-a-rainbow-royalty-free-image-1608325478.jpeg?width=559&height=559')
      .addFields(
        { name: '👇🤖moderator command🤖👇', value: '**+kick @Target**' },
        { name: 'CLEAR CHAT ', value: '+clear||+c' },
        { name: '✔HOW TO CLEAR CHAT !?✔', value: '+help clear' },
        { name: ' 🖼 SHOW YOUR AVATAR 🖼 ', value: '**+avatar**' },
        { name: '📡SHOW YOUR ACCOUNT INFORMATION📡', value: '**+user** ' },
        { name: 'Update ...📣SHOWS YOU SERVER INFORMATION📣', value: '**+server**' },
        { name: '🩺SHOW TO YOU PING BOT🩺', value: '**+ping**' },

        { name: '\u200B', value: '\u200B' }
      )
      .addField('☄ More possibility will be added soon ... ☄', '🤍Just some patience... 💛', true)
      .setImage('https://images-ext-2.discordapp.net/external/LtW9lTv0GkXXPSLyOkzlpSZtKlkgXnWYfkE9E32o6og/https/media.discordapp.net/attachments/800448074555719730/824751648684900392/image0.gif')
      .setTimestamp()
      .setFooter('developed by major', 'https://cdn.discordapp.com/avatars/805824634985250856/3073680628dd5c497228b7696c2cc81e.png?size=1024');

    message.channel.send(embed);
  }
});
  //On MemberAdd
  client.on('guildMemberAdd', member => {
    let count = member.guild.memberCount.toString() 
    let end = count[count.length-1]
    let suffixed = end == 1 ? count + "st" : end == 2 ? count + "nd" : end == 3 ? count + "rd" : count + "th" 
    const channel = member.guild.channels.find(chnl => chnl.name === `${public-chat}`);
    const memberavatar = member.user.displayAvatarURL
        if (!channel) {
          console.log("Set channel name in config.");
          return;
        };
        const guildspot = guildconfig || member.guild
        const emojispot = ` ` || `${825845327859810325}`
   //   let title1 = `${etitle}` || member.guild
        let str = `Welcome to ${guildspot}! **${member.user.username}**! \nYou are the **${suffixed}** member!
        \n${customtext} ${emojispot}`
        const embed = new Discord.RichEmbed()
        .setAuthor(member.user.tag, memberavatar)
        .setColor(ecolor)
    //  .setTitle(`${title1}`)
        .setDescription(str)
        .setThumbnail(memberavatar)
        .setFooter(`📥 ${member.user.username} Joined!`)
        .setTimestamp();
        channel.send(embed);
    
    const logs = member.guild.channels.find(chnl => chnl.name === `${logc}`);
    logs.send(`> :inbox_tray: ${member} has Joined ${member.guild.name}.`)
  });
//Avatar Using
client.on('message', message => {

  if (message.content.toLowerCase() === `${prefix}avatar`) {
    let embed = new Discord.MessageEmbed();
    if (!message.mentions.users.first()) {
      embed.setColor("00ff00");
      embed.setFooter("Your avatar!");
      embed.setImage(message.author.displayAvatarURL({ format: 'png' }) + "?size=2048");
      message.channel.send(embed);
    } else {

      let user = message.mentions.users.first();
      embed.setFooter(`${user.tag}'s avatar!`);
      embed.setImage(message.mentions.users.first().displayAvatarURL({ format: 'png' }) + "?size=2048");
      embed.setColor("#00ff00");
      embed.setImage(mention.user.displayAvatarURL({ format: 'png' }));
      message.channel.send(embed);
    }

    // Send the user's avatar URL
    //if (!message.mentions.users.size)

     // message.reply(message.author.displayAvatarURL());
    }
  });

  //server info
  process.setMaxListeners(0);
  client.on('message', message => {
    if (message.content.toLowerCase() === `${prefix}server`) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Server Info")
        .setImage(message.guild.iconURL)
        .setDescription(`${message.guild}'s information`)
        .addField("Owner", `The owner of this server is ${message.guild.owner}`)
        .addField("👮‍♂️Member Count", `This server has ${message.guild.memberCount} members`)
        .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
        .addField("🔐Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
     // message.channel.send(embed)
    }
  })


  //user info


  //kick user 
  client.on('message', message => {
    if (message.content.toLowerCase() === `${prefix}kick`) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You have no permissions to do that');
            return;
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('pls mention member witch you need to kick');
            return;
        }

        //Get the highest role of user for compare
        let authorHighestRole = message.member.highestRole.position;
        let mentionHighestRole = mentionMember.highestRole.position;

        //If mention user have same or higher role, so show this error msg
        if(mentionHighestRole >= authorHighestRole) {
            message.channel.send('You can`t kick members with equal or higher position');
            return;
        };

        //Check if your bot can`t kick this user, so that show this error msg 
        if(!mentionMember.kickable) {
            message.channel.send('I have no permissions to kick this user');
            return
        };

        //If all steps are completed successfully try kick this user
        mentionMember.kick()
            .then(() => console.log(`Kicked ${member.displayName}`))
            .catch(console.error);
    };
})

//clear chat
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/\s+/);
  const [command, input] = args;

  if (command === 'clear' || command === 'c') {
    //prem error
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "You cant use this command since you're missing `manage_messages` perm",
        );
    }

    if (isNaN(input)) {
      return message.channel
        .send('enter the amount of messages that you would like to clear')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    if (Number(input) < 0) {
      return message.channel
        .send('enter a positive number')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    // add an extra to delete the current message too
    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    message.channel.bulkDelete(amount, true)
      .then((_message) => {
        message.channel
          // do you want to include the current message here?
          // if not it should be ${_message.size - 1}
          .send(`Bot cleared \`${_message.size}\` messages :broom:`)
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      });
  }
  //help clear commadn
  if (command === 'help' && input === 'clear') {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#00B2B2')
      .setTitle('**Clear Help**')
      .setDescription(
        `This command clears messages for example \`${prefix}clear 5\` or \`${prefix}c 5\`.`,
      )
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.displayAvatarURL(),
      )
      .setTimestamp();

    message.channel.send(newEmbed);
      }
});
client.login(token)
