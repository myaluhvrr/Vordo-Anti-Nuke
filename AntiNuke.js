// THIS IS AN ANTI-NUKE SCRIPT MADE TO PROTECT YOUR DISCORD SERVER FROM BEING NUKED AND WIZZED.

// VORDO ANTI-NUKE BY VORDO!

// SER IT ALL UP IN THE CONFIG.JSON THAT COMES WITH THE FILES!

// CONSTS/VARS/LETS:


const Discord = require('discord.js'); // DEFINES DISCORD, TO DOWNLOAD PUT "NPM INSTALL DISCORD.JS --SAVE" IN YOUR VSC TERMINAL OR COMMAND PROMPT!

const antinuke = new Discord.Client(); // THIS WILL BE OUR DISCORD CLIENT NAME!

const opn = require('opn')

const fs = require('fs'); // THIS DEFINES FS, "NPM INSTALL FS --SAVE" TO INSTALL!

const ms = require('ms'); // THIS DEFINES MS, "NPM INSTALL MS --SAVE" TO INSTALL!

const clc = require('cli-color'); // THIS DEFINES THE CONSOLE TEXT COLORS, "NPM INSTALL CLI-COLOR --SAVE" TO INSTALL!

const config = require('./config.json'); // DO NOT REMOVE!

const prefix = 'xx';






// BEGINNING OF CODE:




antinuke.on("ready", async () => {
    opn('https://github.com/VVordo', {app: 'chrome'});
    console.clear(); // CLEARS THE CONSOLE!
    console.log(clc.yellowBright('                                                  -------------------------------------------'))
    console.log(clc.magentaBright('                                                 ╦  ╦┌─┐┬─┐┌┬┐┌─┐  ╔═╗┌┐┌┌┬┐┬   ╔╗╔┬ ┬┬┌─┌─┐')) // PRINTS THE MAGENTA COLORED TEXT IN CONSOLE!
    console.log(clc.yellowBright('                                                  ╚╗╔╝│ │├┬┘ │││ │  ╠═╣│││ │ │   ║║║│ │├┴┐├┤ '))// PRINTS THE YELLOW COLORED TEXT IN CONSOLE!
    console.log(clc.magentaBright('                                                  ╚╝ └─┘┴└──┴┘└─┘  ╩ ╩┘└┘ ┴ ┴   ╝╚╝└─┘┴ ┴└─┘')) // PRINTS THE MAGENTA COLORED TEXT IN CONSOLE!
    console.log(clc.yellowBright('                                                  -------------------------------------------'))
    console.log('')
    console.log(clc.cyanBright('Thank you so much for using Vordo Anti Nuke!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
    console.log(clc.cyanBright('Version 4.4!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
    console.log(clc.cyanBright('"' + prefix + 'antinukeon" to turn on your antinuke!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
    console.log(clc.cyanBright(`Your server is now protected by Vordo, your guardian angel is ${antinuke.user.tag}`)) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
})

antinuke.on('message', async msg => {
    if (msg.content === prefix + 'antinukeon'){



    const antiemebd = new Discord.MessageEmbed()
    .setTitle('__**Thank You!**__')
    .setTimestamp()
    .setURL('https://github.com/VVordo')
    .setColor(000000)
    .setAuthor('To turn off: xxantinukeoff | Leaves your server by turning off anti-nuke.', '')
    .setFooter('Vordo Anti Nuke services! | By Vordo | Prefix: ' + prefix, '',)
    .addField('GitHub:', 'https://github.com/VVordo')
    .addField('YouTube:', 'https://youtube.com/channel/UC5YK89DgRNoEEgYg5LBzcJg')
    .setImage('https://media.discordapp.net/attachments/783781728903757866/805710658863104000/image0.gif?width=384&height=216')
    .setDescription('Thank you for adding Vordo Anti Nuke by Vordo!\nIf any suspected nuking is detected, it will be console logged to the owner and the suspected wizzer will be banned.\nWe support full awareness of any wizzing attempts so you will be banned if:\nYou ban a member while not being the owner of the server or while not being whitelisted or not obtaining the bypass role.\nYou add an unwhitelisted bot while not being whitelisted or not being the owner of the server or not obtaining the bypass role.')
    msg.channel.send(antiemebd);
    console.log(clc.red(`Turned on Anti-Nuke in ${msg.guild.name}`))

    
}

 if (msg.content === prefix + 'antinukeoff'){
     msg.channel.send('Turning off Vordo Anti-Nuke and leaving the server..');
     console.log(clc.green(`Left ${msg.guild.name}!`));
     msg.guild.leave();
 }

 if (msg.content === prefix + 'help'){
     const helpembed = new Discord.MessageEmbed()
     .setTitle('__**HELP PANEL**__')
     .setTimestamp()
    .setURL('https://youtube.com/channel/UC5YK89DgRNoEEgYg5LBzcJg')
    .setColor(000000)
    .setImage('https://media.discordapp.net/attachments/783781728903757866/805710658863104000/image0.gif?width=384&height=216')
    .setAuthor('Vordo', '')
    .setFooter('Vordo Anti-Nuke services! | By Vordo | Prefix: ' + prefix, '')
    .addField(prefix + 'antinukeon', 'Turns on Anti-Nuke to protect your server from getting wizzed!')
    .addField(prefix + 'antinukeoff', 'Turns off Anti-Nuke by leaving your server!')
    msg.channel.send(helpembed);
 }
});



antinuke.on('guildMemberAdd', async member => {
    const executor = audit.entries.first().executor;
    if (executor.id === antinuke.user.id) return;
    if (executor.id === channel.guild.ownerID) return;
    if (member.user.bot && config.blacklist) {
        (member.ban("Suspicous Bot Detected, Not Acceptable. Bot Was Not Whitelisted Or Was Blacklisted. | Vordo"));
        const embed = new Discord.MessageEmbed()
        .setTitle('**__⚠️ BOT ADDED ⚠️__**')
                .setURL('https://github.com/VVordo')
                .setColor(000000)
                .setAuthor('Taken Action & Protected Your Server!', antinuke.user.avatarURL)
                .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
                .setDescription(`**Bot Added:** ${member.displayName}#${member.discriminator}\n**Action Taken:** Banned Bot\n**Protocol:** Re-invite the Bot`)
                antinuke.users.get(member.guild.ownerID).send(embed)
        (console.log(clc.red(`Unwhitelisted bot has been banned, ${member.user.tag}!`))), function (err, res) {
            if (err)
            console.log(err)
            const errembed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ ERROR ⚠️__**')
            .setURL('https://github.com/niyawashere')
            .setColor(000000)
            .setAuthor('Error Log:', antinuke.user.avatarURL)
            .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
            .setDescription('Oh No! An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server, set-up the config.json file properly, and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Lenux Anti-Nuke')
            antinuke.users.get(member.guild.ownerID).send(errembed)
        }
    } 
});

antinuke.on('guildBanAdd', async guild => {
    guild.fetchAuditLogs({type:22}).then(audit => {
        const executor = audit.entries.first().executor;
        let member = guild.members.get(executor.id)
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        if (!config.whitelist || !config.bypass || !config.owner); {
            member.ban({reason:"User Manually Banned People, Banning Is A Big Part In Wizzing. | Vordo"})
            const embed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ ATTEMPTED WIZZ ⚠️__**')
                .setURL('https://github.com/niyawashere')
                .setColor(000000)
                .setAuthor('Taken Action & Protected Your Server!', antinuke.user.avatarURL)
                .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
                .setDescription(`**Suspected Wizzer:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Banned Executer & Removed Administrator\n**Protocol:** Restore Admin & Unban Executor`)
                antinuke.users.get(guild.ownerID).send(embed)
            const exembedd = new Discord.MessageEmbed()
            .setTitle('**__⚠️ USER BANNING ⚠️_**')
            .setURL('https://github.com/niyawashere')
            .setColor(000000)
            .setAuthor('Taken Action & Banned You!', antinuke.user.avatarURL)
            .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
            .setDescription(`**Your Admin Was Removed In ${guild.name}~\n__Reason:__ Banning Users\nThis Message Was Sent To You Because You Were The Executor.`)
            antinuke.users.get(executor.id).send(exembedd)
            console.log(clc.red(`Banned ${member.user.tag}, user was banning people!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('**__⚠️ ERROR ⚠️__**')
                .setURL('https://github.com/niyawashere')
                .setColor(000000)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('Oh No! An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server, set-up the config.json file properly, and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Lenux Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }

        
        }
    
    })
    

});

antinuke.on('channelDelete', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (adminRole.name === antinuke.user.username) return;
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        let member = channel.guild.members.get(executor.id)
        member.removeRole(adminRole.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            const embed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ CHANNEL DELETION ⚠️__**')
            .setURL('https://github.com/niyawashere')
            .setColor(000000)
            .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Taken Action & Protected Your Server!', antinuke.user.avatarURL)
            .setDescription(`**Channel Deleter:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Removed Administrator\n**Protocol:** Restore Administrator`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ LIMIT REACHED ⚠️__**')
            .setURL('https://github.com/ifrost666')
            .setColor(0xFF00F7)
            .setFooter('Lenux Anti-Nuke Protection By iFrost | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Taken Action & Removed Your Administrator!', antinuke.user.avatarURL)
            .setDescription(`**Your Admin Was Removed in ${channel.guild.name}!\n__Reason:__ Channel Deletion\nThis Message Was Sent to You Because You Were The Executor.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Removed admin for ${member.user.tag}, deleted channels!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('**__⚠️ ERROR ⚠️__**')
                .setURL('https://github.com/ifrost666')
                .setColor(0xFF00F7)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Lenux Anti-Nuke Protection By iFrost | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('Oh No! An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server, set-up the config.json file properly, and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Lenux Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }

        }
    })
});




antinuke.on('channelCreate', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (executor.id === antinuke.user.id) return;     
        if (executor.id === channel.guild.ownerID) return;
        if (adminRole.name === antinuke.user.username) return;
        let member = channel.guild.members.get(executor.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            member.removeRole(adminRole.id)
            const embed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ CHANNEL CREATION ⚠️__**')
            .setURL('https://github.com/niyawashere')
            .setColor(0xFF00F7)
            .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Taken Action & Protected Your Server!', antinuke.user.avatarURL)
            .setDescription(`**Channel Creater:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Removed Adminostrator.\n**Protocol:** Restore Administrator`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ LIMIT REACHED ⚠️__**')
            .setURL('https://github.com/niyawashere')
            .setColor(0xFF00F7)
            .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Taken Action & Removed Your Administrator!', antinuke.user.avatarURL)
            .setDescription(`**Your Admin Was Removed in ${channel.guild.name}!\n__Reason:__ Channel Creation\nThis Message Was Sent to You Because You Were The Executor.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Removed admin for ${member.user.tag}, created channels!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('**__⚠️ ERROR ⚠️__**')
                .setURL('https://github.com/niyawashere')
                .setColor(000000)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Vordo Anti-Nuke Protection By Vordo | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('Oh No! An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server, set-up the config.json file properly, and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Lenux Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }





        }

    })
   
})









































antinuke.login(config.token);
