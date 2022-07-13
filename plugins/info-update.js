let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 UPDATE 」
│📮Info Update ada di Grub Wa ya!!
│
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'https://chat.whatsapp.com/DUCX4Q6flMr9ufYWL7kHHv'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['infoupdate']
handler.tags = ['update']
handler.command = /^infoupdate$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA