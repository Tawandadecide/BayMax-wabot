let handler = async m => m.reply(`
ā *Toshiro :* a whatsapp bot\n\nš *URL :* https://instagram.com/itz_toshiro12/
`.trim()) // repository
handler.help = ['BayMax']
handler.tags = ['info']
handler.command = /^BayMax|repo$/i

module.exports = handler
