const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2Y6rOBT8F78mfQNhySK1NEAnBMgeyDaaBwMGHDYHzJZW/n1E0q2+I82908OTZeM65ao65x0kKc6RgRowfgckwyWkqF3ShiAwBnLheSgDXeBCCsEYpBrZ3I5767aLd6UxO54jAt9UxF4mjrbZTNXa9nVvfSkXff8V3LuAFHaEnd8AWo4qDFcn1U7nF8u2iAg5R63r1dIVVLmTFeZwtYwUO2LkzSu4t4gQZzjxJyRAMcpgZKBmDXH2PfrSOh6Q6S43vGR4Pvmlcj4m+zJcLmVNy3It3CcT29CvExp/kz6/sIItnB634nWh9ja3uRbbfL0Vd8F5UY4WfmOKYr0xGWtWPenn2E+Qq7kooZg239bd0nTC6Evf3K8UwS4u4nJQJpmk1Xh4hCuriOmO7K0DTo/S94iT2aS/lXk3FJNFPVeXh93a1eLJ2Rj5h4785rMXk7qrXhVw/yC+zj6zEv4f3SvZlvTOZb61pMVhz+3LutaKurrEaTHaR7ZbNPL2CnuHQWh9j76xfuPyUbYUe1Pv1qPiwIU43kr6iTB5HkGFI5esqtm3nal90Ye0yH7H0s6uczPhjGPCO0I1E6YTZJBJcIm1tyLtm7iYzpVrIW4qOjv4bJ3W+70WeY2xjq9mxx2Q4zKpjDC9Svx5kp73u8ilEvZfHy8KUaO5YMzeuyBDPs5pBilOk3aP57sAuuUOORmiD3WB32iKJorr4Wyu1A5ZnfWhLrOJE8tuSTfT/n4xPbPaZYdm2ivoApKlDspz5M5wTtOsWaA8hz7KwfjPv7ogQTV9+tZW49gu8HCWUyspSJRC99PUz0PoOGmR0F2TOEq7QBkYM1/biFKc+HkrY5HAzAlwiZQA0hyMPRjl6N4FLiqxg1o8oMeZwAqWax5Ujs30KxsuDK1qKQdp8vylzyDXsYfCC4TC8IUf9UcvQ+Q4L96I60M06NuuJ4IuwB8t0975pYM3b3UtGKZDsquWyMdzjK8z/yAoAWIeLjylRxlywZhmBeoCGzphQcw0RMlvcGfNgQgzU6xuYq2kkySoJoEp1IIdDX/CfVoKxu9fY0pJ3RZP0PfsmZe2oAviRwLx4+UCP+DYPt9nxdFYFP/If1StkJCQHwmiLe6H6O0NF1GIoxyMgbK6GonAq5NFseDnvKrKmi8pvgS+TPoM+zNNq1DIay+cYkPNw7Q6mhnCjNzjyG0n5D7UN45X129eqHPp67+AgDE4Gc5RCczN0Iq3wjR24k423ZrVDUZ0UnpvgTys1aN7OiA1LFLSp8uqtwmrtXE8ualh5mUyZWKPOx8rosI5X8eGuxhJ0mtb7RmWn4s5y9VB750YszPltDQKZmgQTi33FPZSJtKKcG7qb0mzd91IbrCY7pRBESw33KaCHa8pzoGdj8Jrn0jiiU9iUp7K2aoKNs82fIyB6GP84keHvH9Ey8PoMc0S2Fr0X+b8nHLm3v0J42M+/iJJsklW9uIoyCccZLqxmDIil1LJG4kOU9iaiq3ZbOhsOEFxRXC//9UFJILUS7MYjAFM3CzFLuiCCOZU+mpUE8copzAmYMwO+H6fZUR+1AVxIxGyo5B+9jeQ2m99qcD9b93hPSD6BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





