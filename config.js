const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "263713305796" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713305796";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_32_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdaSHg3SDdQWHE0S0pjSU1OUGhOV053Nm5xYjRKS0h4cDRodmNVRVhWc0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc4NDU3NjI0MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI1NTA5MDlCQjVCRjZENERDOEREN0REMDc3OUNBNDIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTA1NTk3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3ODQ1NzYyNDE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzk5MjkzNzA4QURCNkI4QUVEMEI2RDA3RjYwM0EyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwNTU5NzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzg0NTc2MjQxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTUwMTVGQjYwNkQzNDQxODk1QzFGQTA5MkJCOUREMkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDU1OTc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc4NDU3NjI0MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzNjAwOTRDMzI2RUY4REI2NzlGMkJDQTkxMjJCRUQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTA1NTk3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3ekQxalFKRVNFaWZaY1VicWt1LUlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNhYTc1NzgwLWM2MzktNDc1NC1hNGU0LWMxYmVlM2MwYWUwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgNzQsXG4gICAgICA4MyxcbiAgICAgIDIwMixcbiAgICAgIDIwNixcbiAgICAgIDEwNixcbiAgICAgIDkzLFxuICAgICAgMTEzLFxuICAgICAgMTA5LFxuICAgICAgMTk5LFxuICAgICAgMTgwLFxuICAgICAgOTYsXG4gICAgICAxMyxcbiAgICAgIDIzNixcbiAgICAgIDE0MyxcbiAgICAgIDIwMSxcbiAgICAgIDU0LFxuICAgICAgNjksXG4gICAgICAyMixcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDIxNCxcbiAgICAgIDEzMCxcbiAgICAgIDQ4LFxuICAgICAgMzQsXG4gICAgICA0MyxcbiAgICAgIDE0OCxcbiAgICAgIDIxNyxcbiAgICAgIDE5MCxcbiAgICAgIDYsXG4gICAgICAyMDcsXG4gICAgICAxNTUsXG4gICAgICAxNDUsXG4gICAgICAyMDUsXG4gICAgICAxMDIsXG4gICAgICA2MixcbiAgICAgIDE2NyxcbiAgICAgIDEzNSxcbiAgICAgIDEyNyxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOTTNXRjM4WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc4NDU3NjI0MTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQzODA0MzIxOTA2OTE2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFLMkRRUTNlemFzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJId3hNMUhDWHRYQnJxZXJzYk8wdTNXQ1JuZXVoWnZrQ3hVYmM0eXhNV0VZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlqZ3d1ZE5tN3JKOWx1SDl0TUt6RGY2UlcySzIzRzIzUUQzeHlWK0NDU0E4UTh6WnNvb3RqZ3A2VU5ZQUE3QTVrbXpBRjQ4dklYTXF3cXA0R1doV0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjErN292MTU4SjhyYzV4SE9kM1hyS3FQeGNCUHBkZlkvb0VmZWJHNEUrcWVFdlNqY1VmOTR0Zkd4S0VKMWk2Zm9iYmdGcXcwWk9VcWNFVmFKZ1BSNmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3ODQ1NzYyNDE4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkwNTU5NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJQ2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlDai5qc29uIjogIntcImtleURhdGFcIjpcIjVMQ0lhajZKTzJnVlN4MWhnRXRFTXI2YTV5bWNLcnNiWHlpQnNWOVk2alk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwNDk0OTg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwNTU5NzQyMjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DION-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dion-md",
  ownername:process.env.OWNER_NAME|| "Dion",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "DION"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
