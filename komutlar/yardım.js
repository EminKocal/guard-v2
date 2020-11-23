const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`✦・Dark Diamond`)
.setDescription(`


<a:diamond:774571332322066432> **=**  \`d+kanal-koruma\` : **Kanal Koruma Aç/Kapat**
<a:diamond:774571332322066432> **=**  \`d+küfür-engel\`:  **Küfür Engel Aç/Kapat**
<a:diamond:774571332322066432> **=**  \`d+reklam-engel\` :  **Reklam Engel Aç/Kapat**
<a:diamond:774571332322066432> **=**  \`d+sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
<a:diamond:774571332322066432> **=**  \`d+ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
<a:diamond:774571332322066432> **=**  \`d+unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
<a:diamond:774571332322066432> **=**  \`d+temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
<a:diamond:774571332322066432> **=**  \`d+ping\`:  **Pinginizi Ölçüp Atar**


`)
.setImage("https://cdn.discordapp.com/attachments/776591325507354656/776602641395351582/black-diamond-large-d-image-dark-background-148492949.jpg")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};