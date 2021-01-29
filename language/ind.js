exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar yxu|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\n```kamu sudah terdaftar dengan data \n\n❏├ nama\n❏├ ${namaUser}\n❏├ nomer\n❏├ wa.me/${sender.split("@")[0]}\n❏├ umur\❏├${umurUser}\n❏├ waktu pendaftaran\n❏├ ${time}\n\n❏├ *NS* \n❏├${serialUser}\n❏├ NOTE : jangan sampai lupa nomer ini karena ini penting:v````
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `

╭────[ 𝗔𝗕𝗢𝗨𝗧 𝗨𝗦𝗘𝗥 ]────
├ ◩ *Nama* : ${pushname}
├ ◩ *Nomer* : wa.me/${sender.split("@")[0]}
├ ◩ *Uang mu* : Rp${uangku}
├ ◩ *XP* : ${getLevelingXp(sender)}/${reqXp}   
├ ◩ *Level* : ${getLevelingLevel(sender)}
├ ◩ *User register* : ${_registered.length}
╰────[ 𝗔𝗕𝗢𝗨𝗧 𝗨𝗦𝗘𝗥 ]────

╭────[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]────
├◩ *Name : 𝙮𝙓𝙪 𝘽𝙊𝙏*
├◩ *Owner : WahyuuAR*
├◩ *Prefix : [#]*
├◩ *Instagram : yuu_fck18*
├◩ *Creator : affisjunianto*
╰────[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]────   


    ■ 𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔
 ❏ *${prefix}sticker*
 ❏ *${prefix}vinta*
 ❏ *${prefix}avengers*
 ❏ *${prefix}summer*
 ❏ *${prefix}sandwrite*
 ❏ *${prefix}metaldark*
 ❏ *${prefix}dropwater*
 ❏ *${prefix}greenneon*
 ❏ *${prefix}neontext*
 ❏ *${prefix}sumery*
 ❏ *${prefix}blood*
 ❏ *${prefix}firework*
 ❏ *${prefix}lava*
 ❏ *${prefix}qrcode*
 ❏ *${prefix}ninjalogo*
 ❏ *${prefix}glitch*
 ❏ *${prefix}wolflogo*
 ❏ *${prefix}lionlogo*
 ❏ *${prefix}jokerlogo*

    ■ 𝐌𝐄𝐃𝐈𝐀 𝐌𝐄𝐍𝐔
 ❏ *${prefix}toxic*
 ❏ *${prefix}quotes*
 ❏ *${prefix}beritahoax*
 ❏ *${prefix}brainly*
 ❏ *${prefix}pinterest*
 ❏ *${prefix}resepmasakan*
 ❏ *${prefix}igstalk*
 ❏ *${prefix}bitly*

     ■ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔
 ❏ *${prefix}mining*
 ❏ *${prefix}bisakah*
 ❏ *${prefix}kapankah*
 ❏ *${prefix}apakah*
 ❏ *${prefix}rate*
 ❏ *${prefix}slap*
 ❏ *${prefix}tampar*
 ❏ *${prefix}moddroid*
 ❏ *${prefix}happymod*
 ❏ *${prefix}nangis*
 ❏ *${prefix}cium*
 ❏ *${prefix}peluk*
 
    ■ 𝐌𝐔𝐓𝐔𝐀𝐋
 ❏ *${prefix}mutual*
 ❏ *${prefix}next*
 
    ■ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃
 ❏ *${prefix}ytmp3*
 ❏ *${prefix}ytmp4*
 ❏ *${prefix}joox*
 
    ■ 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔
 ❏ *${prefix}pokemon*
 ❏ *${prefix}anjing*
 ❏ *${prefix}blowjob*
 ❏ *${prefix}nekonime*
 ❏ *${prefix}kpop*
 ❏ *${prefix}husbu*
 ❏ *${prefix}shota*
 ❏ *${prefix}ranime*

    ■ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔
 ❏ *${prefix}hidetag*
 ❏ *${prefix}grouplist*
 ❏ *${prefix}level*
 ❏ *${prefix}linkgc*
 ❏ *${prefix}tagall*
 ❏ *${prefix}setpp*
 ❏ *${prefix}add*
 ❏ *${prefix}kick*
 ❏ *${prefix}setname*
 ❏ *${prefix}setdesc*
 ❏ *${prefix}demote*
 ❏ *${prefix}promote*
 ❏ *${prefix}listadmin*
 ❏ *${prefix}group* [buka/tutup]
 ❏ *${prefix}leveling* [enable/disable]
 ❏ *${prefix}nsfw* [1/0]
 ❏ *${prefix}simih* [1/0]
 ❏ *${prefix}welcome* [1/0]

    ■ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔
 ❏ *${prefix}bc*
 ❏ *${prefix}bcgc*
 ❏ *${prefix}kickall*
 ❏ *${prefix}setreply*
 ❏ *${prefix}setprefix*
 ❏ *${prefix}clearall*
 ❏ *${prefix}block*
 ❏ *${prefix}unblock*
 ❏ *${prefix}leave*
 ❏ *${prefix}event* [1/0]
 ❏ *${prefix}clone*
 ❏ *${prefix}setppbot*

    ■ 𝐋𝐈𝐌𝐈𝐓
 ❏ *${prefix}limit*
 ❏ *${prefix}buylimit*
 ❏ *${prefix}transfer*
 ❏ *${prefix}dompet*


    𝑵𝑶𝑻𝑬 : 
    *_Dont spam and call_*
    *Langar??* 
    *BLOCK*
    *Sekalian follow ig aing :D
    *_https://Instagram.com/yuu_fck18_*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	rre*「 SELAMAT 」*
❏├ *Nama* : ${pushname}
❏├ *Nomer* : wa.me/${sender.split("@")[0]}
❏├ *Xp* : ${getLevelingXp(sender)}
❏├ *Limit* = +3
❏├  *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}
) 
exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}