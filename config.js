const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "London";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233202572593";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_18_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkUzOEVjWlhsSXhyQkFlbDJrcXhIVTQ5QVRpaWtJK2RTWitlaXQ2Mm1CTVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhQTHJJZHFLU2JTTUxIYVc4d0huZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzEyMGEyNGMtN2E0OS00ODhjLWJjMzItNTdmOWMwODJlMmY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMjE3LFxuICAgICAgMTcxLFxuICAgICAgMjQ1LFxuICAgICAgMTAwLFxuICAgICAgMjEsXG4gICAgICA3OSxcbiAgICAgIDgyLFxuICAgICAgMjIzLFxuICAgICAgNDEsXG4gICAgICA5NCxcbiAgICAgIDQwLFxuICAgICAgMTI4LFxuICAgICAgMjAzLFxuICAgICAgMjUxLFxuICAgICAgMTczLFxuICAgICAgMjEyLFxuICAgICAgMTUzLFxuICAgICAgNzEsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDY0LFxuICAgICAgNDQsXG4gICAgICAxMzMsXG4gICAgICAxMzAsXG4gICAgICAxNzcsXG4gICAgICA0NSxcbiAgICAgIDEwNixcbiAgICAgIDEzMSxcbiAgICAgIDI5LFxuICAgICAgODUsXG4gICAgICA0NSxcbiAgICAgIDM2LFxuICAgICAgMjA3LFxuICAgICAgMjE4LFxuICAgICAgMjIzLFxuICAgICAgNTUsXG4gICAgICAxNzIsXG4gICAgICAyMyxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHV3FNOEhFUFNGOWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXJBYXY5ZzhRM3RLb2hmdVBOclh6Nmo0Ri9wQ2lkczJISXYvYnJpMTJCVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWbFM1MTMzQ2R5YktxVktuV3c0dXp6R1FGT3dFdzVBcFBlMmtsMnl3Sk04eVJTc0EwQXNKZlF1SE1GV3owVHYzbkRxY1FqUWkzUlZ5cmlYRml3K0JDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwN3FwTGdxN3pLSXNPRkttYWlseHBvam1JTm9lQm16MTQrTm9nK2FMSXJXOWl0MDZ5eG9OdXFTZ2t3Y1hzamMwKy90V3RQWk5yU1pTUVlMUDhPUU9Edz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwMjU3MjU5Mzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQzNTMzNTIwODM0NTgxOjYwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjAyNTcyNTkzOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4MjMyOVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "XXIII",
  ownername:process.env.OWNER_NAME|| "RealAaron",


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
