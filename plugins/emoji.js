let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['Ohhπ','Bahut Achhaa πππ','π€£π€£','Sahi Hai π€­π€­π€­π€­π€­','Uffff ππππ','π­','Bhery Sed πππ','Hmmm π','Tere jaise yaar kaha π','π€£','Ye Dil π Kyu toda π','Oyee hoyeee π€©π€©π', 'ππππ','π','Baharo π€£ Phool Barsao πΈ Mera Mehbub Aaya Hai π','πKya se kya ho gye dekhte dekhteπ','Tu Mat Bol Tu Matlabi hai π€¨','πππ','Maine Aapka Photo πΈ Le liya h π Ab Aapko Viral Kar Dunga π','Pehele Mera Dost bhi Aise Hi harkate kiya karta tha π Phir Ek din usko Kuch log utha kar le gye','Dil β₯οΈ Ka Dariya π Beh Hi Gaya π','π₯²π₯²π₯²','Kuch To Log Kahenge π Logo ka kaam Hai Kehna βΊοΈ','ππJust Chill Dude ππ','π','π₯Ί','π±π±π±','Tum to bare heavy Driver nikle π'])}`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = //π|π|π|π|π|π|π€£|π|π|π|π |π|π₯²|π|π|π|π€¨|π|π₯΄/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}