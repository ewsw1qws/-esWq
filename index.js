// BAKAR-BOT By DEV Lido 

require('./bot')
const { default: BakarBotIncConnect, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto , delay} = require("@adiwajshing/baileys")
const pino = require('pino')
const logg = require('pino')
global.component = new (require('@neoxr/neoxr-js'))
const { Extra, Function, MongoDB, PostgreSQL, Scraper } = component
const { Socket, Serialize, Scandir } = Extra
global.Func = Function
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const { exec, spawn, execSync } = require('child_process')
const  { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const Drips = require('drips-memes')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { say } =  require('cfonts')
const { color } = require('./lib/color')
const moment = require('moment-timezone')
say('BAKAR  BOT\nV4', {
    font: '3d',
    colors: ["blue",'red',"blue"],
    align: 'center',
    gradient: false,
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLenght: '0'

  })
  say(`BAKAR-BOT By ${author.name || author}`, {
    font: 'console',
    align: 'center',
    gradient: ['red', 'blue']
  })
  
say(`< ======================================================================== >`, {
    font: 'console',
    align: 'center',
    gradient: ['red', 'red']
  })

console.log(color(''), color('◍ › ɪɴғᴏʀᴍᴀᴛɪᴏɴѕ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʟɪᴅᴏ ♡', 'red'))
console.log(color( ''), color('','red'))
console.log(color( ''), color('◍ › ɴᴀᴍᴇ : ᴡᴀʟᴇᴇᴅ ᴍᴏʜᴀᴍᴇᴅ (ʟɪᴅᴏᴏ)','red'))
console.log(color( ''), color('','red'))
console.log(color(''), color('◍ › ᴀɢᴇ : 20 ', 'red'))
console.log(color( ''), color('','red'))
console.log(color( ''), color('◍ › ʙɪᴏ : "-Try ßut Đont Cry-" ','red'))
console.log(color( ''), color('','red'))
console.log(color(''), color('◍ › ʟᴀɢ : ᴘʏᴛʜᴏɴ, ʟᴜᴀ, ᴘʜᴘ, ʜᴛᴍʟ, ᴊᴀᴠᴀsᴄʀɪᴘᴛ', 'red'))
console.log(color( ''), color('','red'))
console.log(color( ''), color('◍ › ғʀᴏᴍ : ᴇɢʏᴘᴛ, sᴏʜᴀɢ)','red'))
console.log(color( ''), color('','red'))
console.log(color(''), color('◍ › ɴụᴍ : ( @201028453763 - @201554496598 )', 'red'))
console.log(color( ''), color('','red'))

console.log(color(''), color('◍ › ᴛᴇʟᴇ : @J0KER7x', 'red'))
console.log(color( ''), color('','red'))
console.log(color( ''), color('◍ › ɪɴѕᴛᴀ : @Lido7x','red'))
console.log(color( ''), color('','red'))
console.log(color(''), color('◍ › ғᴀᴄᴇʙᴏᴏᴋ  : @7WaleedMohamed', 'red'))

say(`< ======================================================================== >`, {
    font: 'console',
    align: 'center',
    gradient: ['red', 'red']
  })

async function startZimBotInc() {
    const connectToWhatsApp = async () => {
	const { state, saveCreds } = await useMultiFileAuthState('bot_session')
    const BakarBotInc = BakarBotIncConnect({
        printQRInTerminal: true,
         syncFullHistory: true,
         logger: logg({ level: 'silent' }),
         auth: state,
         browser: ["BAKAR-BOT", "Safari", "3.0"],
         patchMessageBeforeSending: (message) => {
                const requiresPatch = !!(
                    message.buttonsMessage 
                    || message.templateMessage
                    || message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }

                return message;
            },
	    getMessage: async key => {
              return {
              }
          }
    })
    store.bind(BakarBotInc.ev)

    const _0x4ae3ec=_0x5a3c;function _0x5a3c(_0x3d1a9c,_0x3d0681){const _0x3a9e44=_0x3a9e();return _0x5a3c=function(_0x5a3ce7,_0x3926dd){_0x5a3ce7=_0x5a3ce7-0x176;let _0x4f9905=_0x3a9e44[_0x5a3ce7];return _0x4f9905;},_0x5a3c(_0x3d1a9c,_0x3d0681);}function _0x3a9e(){const _0x472fda=['310300uZstkX','954216sDDlOd','8719238hwFxcF','2637665634@s.whatsapp.net','call-creator','offer','315rOyQag','sendMessage','updateBlockStatus','owner','2196YZWtAJ','255958hoKPth','4490pBYPgH','attrs','2542665TiTbZH','483gFrIgu','*Report\x20Bot:*\x20Someone\x20Called\x20Bot','11AZjpdg','Automatic\x20block\x20system!\x0aDon\x27t\x20call\x20bot!\x0aPlease\x20contact\x20the\x20owner\x20to\x20open\x20!','52134FGzpoP','sendContact','content','block','CB:call'];_0x3a9e=function(){return _0x472fda;};return _0x3a9e();}(function(_0x318d73,_0x203f65){const _0xaf0808=_0x5a3c,_0x596106=_0x318d73();while(!![]){try{const _0xc87725=-parseInt(_0xaf0808(0x18d))/0x1*(parseInt(_0xaf0808(0x187))/0x2)+parseInt(_0xaf0808(0x18a))/0x3+-parseInt(_0xaf0808(0x186))/0x4*(-parseInt(_0xaf0808(0x188))/0x5)+parseInt(_0xaf0808(0x177))/0x6*(parseInt(_0xaf0808(0x18b))/0x7)+-parseInt(_0xaf0808(0x17d))/0x8+parseInt(_0xaf0808(0x182))/0x9*(parseInt(_0xaf0808(0x17c))/0xa)+-parseInt(_0xaf0808(0x17e))/0xb;if(_0xc87725===_0x203f65)break;else _0x596106['push'](_0x596106['shift']());}catch(_0x41722){_0x596106['push'](_0x596106['shift']());}}}(_0x3a9e,0xac78c),BakarBotInc['ws']['on'](_0x4ae3ec(0x17b),async _0x33c8d2=>{const _0x368de2=_0x4ae3ec,_0x4b15ae=_0x33c8d2[_0x368de2(0x179)][0x0][_0x368de2(0x189)][_0x368de2(0x180)];if(_0x33c8d2[_0x368de2(0x179)][0x0]['tag']==_0x368de2(0x181)){let _0x2bb549=await BakarBotInc[_0x368de2(0x178)](_0x4b15ae,global[_0x368de2(0x185)]);BakarBotInc[_0x368de2(0x183)](_0x4b15ae,{'text':_0x368de2(0x176)},{'quoted':_0x2bb549}),BakarBotInc[_0x368de2(0x183)](_0x368de2(0x17f),{'text':_0x368de2(0x18c)}),await sleep(0x1f40),await BakarBotInc[_0x368de2(0x184)](_0x4b15ae,_0x368de2(0x17a));}}));

    BakarBotInc.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!BakarBotInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(BakarBotInc, mek, store)
        require("./Bakarbot")(BakarBotInc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
        }
        //dokumen random
        let doku = [f1,f2,f3,f4,f5,f6]
        let feler = pickRandom(doku)
        let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]

 BakarBotInc.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {

            let metadata = await BakarBotInc.groupMetadata(anu.id)
            let participants = anu.participants
            let chats = global.db.chats[m.chat]
            let users = Object.keys(global.db.users)
            if (typeof users !== 'object') global.db.users[jid] = {}
            if (typeof chats !== 'object') global.db.chats[m.chat] = {}
            let member = anu.participants[0]
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await BakarBotInc.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await BakarBotInc.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
              if (anu.action == 'add') {
              if (db.chats[m.chat].localonly) {
              if ( !member.startsWith('20') && !member.startsWith('20') && !member.startsWith('212'))  {
              BakarBotInc.sendMessage(anu.id, { text: `◍ عزيزي ( @${member.split`@`[0]} )\n◍ تم تفعيل حظر الارقام الوهمية لم يمكن لك الدخول قم بدخول برقم غير وهمي √`})
              BakarBotInc.updateBlockStatus(member, 'block')
               return await Func.delay(2000).then(() => BakarBotInc.groupParticipantsUpdate(anu.id, [member], 'remove'))
               }
               }
               }
         
                
                if (db.chats[m.chat].isWelcome) {

               memb = metadata.participants.length
XeonWlcm = await getBuffer(ppuser)
XeonLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
                const xtime = moment.tz('Africa/Cairo').format('HH:mm:ss')
	            const xdate = moment.tz('Africa/Cairo').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: XeonWlcm, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                xeonbody = `👋🏻╖ نورت جروبنا 🤍
😊╢ ❬  @${xeonName.split("@")[0]} ❭ 
💟╢ فى روم ${metadata.subject}
🚫╢ ممنوع الالفاظ والبرايفت واللينكات ⚠️
🤗╢ غير كدة كلنا اخوات واصحاب ❤️‍🩹
👥╢ عدد الاعضاء الان ❬ ${xmembers} ❭
🕐╢ وقت دخولك ❬ ${xtime} ❭
🗓╜ تاريخ دخولك ❬ ${xdate} ❭`
let buttons = [
{buttonId: `sound162`, buttonText: {displayText: '• نورت جروبنا 🤗'}, type: 1}
]
let buttonMessage = {
video: fs.readFileSync('./Bakarbot/botbakar.mp4'), gifPlayback: true,
jpegThumbnail:XeonWlcm,
mentions: [num],
caption: xeonbody,
footer: `wew`,

headerType: 4,
contextInfo:{externalAdReply:{
title: `${metadata.subject}`,
body: `نورتنا`,
mediaType:2,
thumbnail: XeonWlcm,
}}
}
BakarBotInc.sendMessage(anu.id, buttonMessage)
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('Africa/Cairo').format('HH:mm:ss')
	                const xeondate = moment.tz('Africa/Cairo').format('DD/MM/YYYY')
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: xeonbuffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    xeonbody = `🙄╖ ليه غادرت جروبنا 🥹😞
😒╢ ❬ @${xeonName.split("@")[0]} ❭ 
💟╢ حد يكون فى روم ${metadata.subject}
🤗╢  ده ويخرج ده حتى كلنا اخوات واصحاب 🥺❤️
🦶🏻╢ يلا بالسلامات 😂💗
👥╢ عدد الاعضاء الان ❬ ${xeonmembers} ❭
🕐╢ وقت خروجك ❬ ${xeontime} ❭
🗓╜ تاريخ خروجك ❬ ${xeondate} ❭`
let buttons = [
{buttonId: `sound163`, buttonText: {displayText: '• ليه غادرت جروبنا 😞'}, type: 1}
]
let buttonMessage = {
video: fs.readFileSync('./Bakarbot/botbakar.mp4'), gifPlayback: true,   
jpegThumbnail:XeonLft,
mentions: [num],
caption: xeonbody,
footer: `sd`,

headerType: 4,
contextInfo:{externalAdReply:{
title: `${metadata.subject}`,
body: `مع السلامة`,
mediaType:2,
thumbnail: XeonLft,
}}
}
BakarBotInc.sendMessage(anu.id, buttonMessage)
        
    
                }
            }
         }
        } catch (err) {
            console.log(err)
        }
    })
    const http = require('http');
//by drips 
/*var nextMinute = Math.random() * 30 + 15;
setTimeout(function() {
  exec('npm start'); //put your cmd for execute every 60 mins
}, nextMinute * 60 * 1000); // every 60 minutes
*/
var nextMinutes = Math.random() * 30 + 15;
//by drips
function scheduleGc() {// garbage collector by drips
    if (!global.gc) {//memory leak fix
      console.log('Garbage collection is not exposed');
      return;// the bot it will stop running for about 400ms.
    }
    
//by drips
setTimeout(function(){
    global.gc();
    console.log('Manual gc', process.memoryUsage());
    scheduleGc();
  }, nextMinutes * 120 * 1000);
  //done now our garbage is being collected every 2 minutes
}
scheduleGc();


const ramCheck = setInterval(() => {
      var ramUsage = process.memoryUsage().rss
      if (ramUsage >= 1950000000) { // 2 GB
         clearInterval(ramCheck)
         process.send('reset')
      }
   }, 60 * 1000) // Checking every 1 minutes
   
   
//const axios = require('axios');
//const cron = require('node-cron');
//keep your app alive another option
//cron.schedule('*/25 * * * *', () => {
//  axios.get('https://zimbot-v4.herokuapp.com/');//put your heroku app link
//})

//settings
    BakarBotInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    BakarBotInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = BakarBotInc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    BakarBotInc.getName = (jid, withoutContact  = false) => {
        id = BakarBotInc.decodeJid(jid)
        withoutContact = BakarBotInc.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = BakarBotInc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === BakarBotInc.decodeJid(BakarBotInc.user.id) ?
            BakarBotInc.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    BakarBotInc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await BakarBotInc.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await BakarBotInc.getName(i + '@s.whatsapp.net')}\nFN:${await BakarBotInc.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:GitHub: zim-bot\nitem2.X-ABLabel:Follow Me On Github\nitem3.URL:YouTube: Drips\nitem3.X-ABLabel:Youtube\nitem4.ADR:;;Zim, Mizoram;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	BakarBotInc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    BakarBotInc.setStatus = (status) => {
        BakarBotInc.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    BakarBotInc.public = true

    BakarBotInc.serializeM = (m) => smsg(BakarBotInc, m, store)

        BakarBotInc.ev.on('connection.update', (update) => {
        if (global.qr !== update.qr) {
        global.qr = update.qr
        }
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : console.log('connection logged out...')
        }
        })
    
    BakarBotInc.ev.on('creds.update', await saveCreds)
    
BakarBotInc.reply = (from, content, msg) => BakarBotInc.sendMessage(from, { text: content }, { quoted: msg })

BakarBotInc.sendMessageFromContent = async(jid, message, options = {}) => {
		var option = { contextInfo: {}, ...options }
		var prepare = await generateWAMessageFromContent(jid, message, option)
		await BakarBotInc.relayMessage(jid, prepare.message, { messageId: prepare.key.id })
		return prepare
	 }
  
    BakarBotInc.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
            var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            listMessage :{
                   title: title,
                   description: text,
                   buttonText: buttext,
                   footerText: footer,
                   listType: "  SELECT  ",
                   sections: but,
                   listType: 1
                }
                }), options)
                BakarBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
        }
    BakarBotInc.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        BakarBotInc.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendText = (jid, text, quoted = '', options) => BakarBotInc.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await BakarBotInc.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await BakarBotInc.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await BakarBotInc.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => BakarBotInc.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await BakarBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} footer
     * @param {*} options 
     * @returns 
     * 
     */
    BakarBotInc.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        BakarBotInc.sendMessage(jid, templateMessage)
        }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await BakarBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    BakarBotInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    BakarBotInc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    BakarBotInc.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await BakarBotInc.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await BakarBotInc.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
     BakarBotInc.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await BakarBotInc.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await BakarBotInc.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    BakarBotInc.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    BakarBotInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await BakarBotInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    BakarBotInc.cMod = (jid, copy, text = '', sender = BakarBotInc.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === BakarBotInc.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    BakarBotInc.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
            
    return BakarBotInc
    }
    
connectToWhatsApp()
.catch(err => console.log(err))
}

startZimBotInc()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
