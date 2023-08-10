import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `*Peraturan Penggunaan Bot* :
- ❌ Dilarang Spam
- ❌ Dilarang Menelpon Bot
- ❌ Dilarang Mengirim Virus Ke Bot

*Catatan* :
Semua fitur bot di lakukan secara otomatis oleh sistem, dan semua informasimu seperti chat, foto, video atau vn akan aman.

Terima Kasih.
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ed20ba073f1727da48d6b.jpg' }, caption: rules }, m)
}
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules|rule)$/i;

export default handler;
