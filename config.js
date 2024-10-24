//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "2392714075";
global.owner = process.env.OWNER_NUMBER || "2392714075";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0krQkhjNDNkZ1o5YWkrTDU3OFJZTmYzNFBJMFU3YjB1U0lqOE8zS0pHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWk1UVN1MzZhcjZjVWZXYWlKS3JNaXZ3UUNOam9Dd09nV1ZHR1BpU2hBaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQTNzV3NHdUQ4NW05OTIzUzN0cUxsbE5hOElKOGRlSGpXalpYQUQ1Q1VZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3b3ZoOVhFUzFWYk92RVE3SFd5ZXhyM0k1Y2JXdkgxS1pCUmlwaFFwV0hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKVWYrTm91N2w2OFZMTmhNYTNkQjZSSmFnLy93YWczTDZoM0ZvMVZmM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpiQ2tLWTY3bTFySVlJTnNpZW1JWG16RWF1N0FaZ0g2QWI4YTFGL1ByMXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VOSE9QY2xPSEZ3OU1zYWYwczBNU0l1a3laT2xBc0F5eVJRaXdia2dWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTBnbnZJQ3I3OUlNM3daYmYzRzJ5N0JzS1R2b3hsZW1Cd3hhZGdRTllnQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdYWmVEYzJJdGFrN1pBT09jREZpS2l0V0ZRUFQvcU9YZW1TMm9DZFVCcDlzZGZJV2lteWw2TldpMWwxdjlqYTNIcWFGMlFZZlRudkVhUVlnUmVOTGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IkJuZ3VUVE1ySVpjd01yVkVzVG0zMERnZG9FOWptV2tqQzJUa3lISHZqK1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTIzOTI3MTQwNzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDZEREU5Qzk1ODcwOTA5NkU4RjM1RTIwMUFBQTMzMjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTc5NjIyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT1d2eHNRTVlUaUs1cFZhU1lBVGF2USIsInBob25lSWQiOiIwZWVlNzIzOS01YWNlLTQ2ODEtOGU0MC03NjI0MjhjMmY0ODIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0drRFQzZFdNRXJrR3NGNnFxaGJySk1pcW1rPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNTSnJoTkRRU3RaVkJmbFZkWjdrVU5ab2d1TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1U0ZLQTlCNyIsIm1lIjp7ImlkIjoiMTIzOTI3MTQwNzU6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibG9yZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmFEbFBRQkVPbXc2cmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWUp3Mm90cmU3ZmpuQlUyWUlBbG9DRTNTaHA3L0tURHlCQytJYTRzaVNndz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZFRsdkh5LzZVbDdaWHQ1d3VpZmVXZDJML3RrcG5DeFJNeHVDT0FNRmxJck9NMU9rSFlrYzg0b1dsb1c3SWJtK3JJOGY4VFZWRWQ5Zldva0NrK0NSRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Imd2ZWlEWUttekZaOU91T1VPSXZMWXJqVXlrb3YwZTdsa3p1Znc4V3FtaDFuc0RTRFRYZ1ppTjhBVTB1L0dibWhPUXJscnorUG9XTDNNZW9UN3ZvMGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTIzOTI3MTQwNzU6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0NjTnFMYTN1MzQ1d1ZObUNBSmFBaE4wb2FlL3lrdzhnUXZpR3VMSWtvTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTc5NjIxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFINU8ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
