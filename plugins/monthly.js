let { MessageType } = require('@adiwajshing/baileys')
 const cooldown = 2592000000
 let handler = async(m, { conn }) => {
     let user = global.DATABASE._data.users[m.sender]
     let _timers = (cooldown - (new Date - user.lastmonthly))
     let timers = clockString(_timers)
     if (new Date - user.lastmonthly > cooldown) {
         conn.reply(m.chat, `You have claimed and got 100000 money, 5 Legendary crate and 3 Pet crate`, m)
         user.money += 100000
         user.legendary += 5
         user.pet += 3
         user.lastmonthly = new Date * 1
     } else {
         let buttons = button(`please wait *🕒${timers}* again to be able to claim again`, user)
         conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
     }
 }
 handler.help = ['monthly']
 handler.tags = ['rpg']
 handler.command = /^(monthly)$/i

 handler.cooldown = cooldown

 module.exports = handler

 function clockString(ms) {
     let h = Math.floor(ms / 3600000)
     let m = Math.floor(ms / 600000) % 60
     let s = Math.floor(ms / 1000) % 60
     console.log({ ms, h, m, s })
     return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
 }

 function button(text, user) {
     const buttons = []

     let claim = new Date - user.lastclaim > 86400000
     let monthly = new Date - user.lastmonthly > 2592000000
     let weekly = new Date - user.lastweekly > 604800000
     console.log({ claim, monthly, weekly })

     if (monthly) buttons.push({ buttonId: `id${buttons.length + 1}`, buttonText: { displayText: '/monthly' }, type: 1 })
     if (weekly) buttons.push({ buttonId: `id${buttons.length + 1}`, buttonText: { displayText: '/weekly' }, type: 1 })
     if (claim) buttons.push({ buttonId: `id${buttons.length + 1}`, buttonText: { displayText: '/claim' }, type: 1 })
     if (buttons.length == 0) throw text

     const buttonMessage = {
         contentText: text,
         footerText: '©BayMax',
         buttons: buttons,
         headerType: 1
     }

     return buttonMessage
 }