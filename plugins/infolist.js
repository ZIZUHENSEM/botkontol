let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `โ STATS`,
	rows: [
	    {title: "๐Test Speed", rowId: '.testspeed', description: 'Test Speed' },
	    {title: "๐Stats Server", rowId: '.statserver', description: 'Status server' },
	{title: "๐คOwner", rowId: '.owner', description: 'Owner Zizu BOT' },
	{title: "๐ฐDonasi", rowId: '.donasi', description: 'Support Zizu' },
	//{title: "๐ ๐ฉ๐๐ฃ", rowId: '.order *Paket:* VIP โข Sewa', description: '๐ฃ๐ฟ๐ถ๐ฐ๐ฒ: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `โ INFO`,
	rows: [
	    {title: "๐Rules", rowId: '.rules', description: 'S&K Zizu BOT' },
	    {title: "โ", rowId: 'huuu', description: 'No menu' },
	{title: "โกSpeed", rowId: '.speed', description: 'Speed Zizu BOT' },
	{title: "๐ฐSewa BOT", rowId: '.sewa', description: 'Sewa Zizu BOT' },
	{title: "๐ฃ๏ธRequest Fitur", rowId: '.request', description: 'Request Fitur Zizu BOT' },
	//{title: "๐ ๐ฃ๐๐ฅ๐ ๐๐ก๐๐ก๐ง", rowId: '.order *Paket:* PERMANENT โข Premium', description: '๐ฃ๐ฟ๐ถ๐ฐ๐ฒ: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah', 'claim']
handler.tags = ['rpg']
handler.command = /^(info|infobot)$/i

export default handler
