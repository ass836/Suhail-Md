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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_19_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlODIvZ28xMU5tbUdWbFducXg0ZzVtMzlBQ1hvckd5cGtoV1piVnhrU3NRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPVFpZbUljdVFnT3p2OUNGUlZnT3lnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiNWFmMWEzLTIxMzYtNGQ5ZS1hZWIwLWUwNDY4NmY1NzU3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDExNixcbiAgICAgIDQyLFxuICAgICAgMjMyLFxuICAgICAgODYsXG4gICAgICAyMzksXG4gICAgICA0OSxcbiAgICAgIDc4LFxuICAgICAgMTY5LFxuICAgICAgNTMsXG4gICAgICAyMixcbiAgICAgIDE4MyxcbiAgICAgIDgxLFxuICAgICAgMjksXG4gICAgICA0LFxuICAgICAgMjA4LFxuICAgICAgMjE2LFxuICAgICAgMTkzLFxuICAgICAgODcsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA0NixcbiAgICAgIDI0OCxcbiAgICAgIDQxLFxuICAgICAgNSxcbiAgICAgIDMwLFxuICAgICAgOTMsXG4gICAgICAxNzMsXG4gICAgICAyMCxcbiAgICAgIDI0MyxcbiAgICAgIDE2MSxcbiAgICAgIDYsXG4gICAgICAxMjIsXG4gICAgICAxODIsXG4gICAgICAxMDQsXG4gICAgICAxMjUsXG4gICAgICAxNzksXG4gICAgICAyNDgsXG4gICAgICAxNzUsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1hZQ1pYWk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzMwNTc5NjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5MjU0MzA4MjA5OTg6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZ2K0xvQ0VQK3l6Yk1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWTTF3TkFDTWNmK0hrbi9oOXdVek1yV3kxek9KWTducCtQRUM1dDFhSWtRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9ENmlZdWsyODlsb3RXRWhRbW50NjQ3Wk5qY2d1cEVjT013Y3JGMThuOGdCMVBEeVpoMW9Ea0VuUnVnSG10VURIejgxditQSzNWZTAyOFRPeE1yQkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImYwSi82bDM5cnBWNUliV1UxcHo5cmVBWWdWc09VY0RpZDFXUmJSL3R0L2xiYTBrS3hMVEZzM0I2Rkd0ZmNoeVExL0JINTZoZ29zWktxRzJhZWJWWWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzMwNTc5NjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODgzNTU4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU15RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXlELmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmx1Vzkxd1hYalpYb0V3WVorWnhTRXBjdzNydS94MUdZOWlCbzIyd3d5OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjA0Nzc4MzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg4Mjk5MDExOTVcIn0iCn0="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
