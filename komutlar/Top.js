const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const rdb = require('quick.db')
const pdb = rdb.table('teyitler');
exports.run = async (client, message, args) => {
      let embed = new MessageEmbed().setColor("RANDOM").setTimestamp();
    let sıralama = message.guild.members.cache.filter(a => a.user.bot == false).array().sort((a , b) => {return rdb.fetch(`kayıttoplam_${b.user.id}`) - rdb.fetch(`kayıttoplam_${a.user.id}`) })
    let sırala= ""
    for (let i = 0 ; i < 10 ; i++){
      if(rdb.fetch(`kayıttoplam_${sıralama[i].id}`) != null && rdb.fetch(`kayıttoplam_${sıralama[i].id}`) != 0){
        sırala+=` [${i+1}]: `+sıralama[i].displayName + ` » ` + rdb.fetch(`kayıttoplam_${sıralama[i].id}`)+'\n'}}
    message.channel.send(embed.setDescription(`**Top Teyit Sıralaması** \n\n ${sırala || 'Sıralama için yeterli veri bulunamadı!'}`));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['top','topteyit'],
  permLevel: 0
}
exports.help = {
  name: 'top',
  description: "toplam teyit gösterir",
  usage: 'top'
}