
const { Client } = require('discord.js');
const Color = `RANDOM`;
const Fetch = require("node-fetch"); 
const Discord = require('discord.js');
const { token, mid ,jid ,pid , nid} = require('./config.json');
const client = new Client({
	disableMentions: 'everyone'
});



client.once('ready', () => {
	console.log(`Hi! im ready `);//credits to legend js for the logic

	

 setInterval(async() => {
 const channel = client.channels.cache.get(mid);
		if (!channel) return console.log('No meme channel was found');
const Reds = [
            "memes",
            "meme",
            "dankmemes",
           
        ];

        const Rads = Reds[Math.floor(Math.random() * Reds.length)];

        const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return message.channel.send(`Sorry but a error ocurred while sending the meme `);

        const data = json[0].data.children[0].data;

        const Embed = new Discord.MessageEmbed()
            .setColor(Color)
            .setURL(`https://reddit.com${data.permalink}`)
            .setTitle(data.title)
            .setDescription(`Author : ${data.author}`)
            .setImage(data.url)
            .setFooter(`${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments || 0} 💬`)
            .setTimestamp();

      await channel.send(Embed).catch(console.error)


        



     

    }, 10000);

setInterval(async() => {
 let nchannel = client.channels.cache.get(nid);
		if (!nchannel) return console.log('No Nekos channel was found ');
const sub = [
            "Cuteanimenekos",
            "Waifu",
            
           
        ];

        const Rads = sub[Math.floor(Math.random() * sub.length)];

        const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return message.channel.send(`Sorry but a error ocurred while sending the neko `);

        const data = json[0].data.children[0].data;

        const Embed = new Discord.MessageEmbed()
            .setColor(Color)
            .setURL(`https://reddit.com${data.permalink}`)
            .setTitle(data.title)
            .setImage(data.url)
            .setFooter(`${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments || 0} 💬`)
            .setTimestamp();

        return nchannel.send(Embed).catch(console.error)


        



     

    }, 10000);
    setInterval(async() => { 
   let pchannel = client.channels.cache.get(pid);
   if(!pchannel){console.log("Wrong channel id provided or no channel id provided lol!")}
   let Embed = new Discord.MessageEmbed()
   .setColor(Color)
   .setImage('https://source.unsplash.com/random')
   await pchannel.send(Embed).catch(console.error)





    }, 10000);


});

client.login(token).catch(err => {
	console.log('Lol a wrong token was provided try replacing or regenerating it?');
});
