import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628xxx', 'Karavan', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628xxx'
global.packname = 'Karavan Bot'
global.author = 'Karavan II.X.MMI'
global.namebot = 'Karavan'
global.wm = 'Karavan Bot'
global.stickpack = 'SMaker'
global.stickauth = 'Karavan'
global.fotonya = 'https://telegra.ph/file/ed20ba073f1727da48d6b.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/'
global.sgh = 'https://github.com/'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/'
global.ptrakterr = 'https://trakteer.id/'
global.povo = '0851-xxxx-xxxx'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
},

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
