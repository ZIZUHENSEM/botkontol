let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Ovo
• Nomor: 081352410020
• A/n: Zizu
• Mitra: ovo
• Metode pembayaran: Online ( ~Cod~ )

💰 *Bayar melalui aplikasi TokoBot*


📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


📮KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/fa62e7dcd0de0b9e052f8.png'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ovo$/i
handler.private = true

export default handler