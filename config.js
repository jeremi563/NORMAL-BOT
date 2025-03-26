const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KqOBT9l7xqHwEBxaquGqRRERAR2tvUeQgQICIXkyBql/8+RV+q+2FOT89bKiRrr6y19uYFFCWmyERXMHoBFcFnyFC7ZNcKgREY13GMCOiCCDIIRgCqzrZaX4KxdKRQny3Ek1QxYiEnHpr8OR8gfxALWUHNrHkE9y6o6uCIw28An+JsDqVTkWrkyd0o14Ls5UXhnWYdf70vOg2rxSYIkZFm4SO4t4gQE1wkepWiHBF4NNF1CTH5GX3VUXY4Usl+vqwK63Sw6HF70bMcCe7S21wVjUVWWmrD41b9Gf1rItDTVXO2QuILMjfdTcznWxPzZ2fj9NFOHKeHp8zqr9LZO32KkwJFRoQKhtn1x7qry0zd3AyllDLS9GxpcTaL7WFri8o416YTXVIYjNSyrz4bPyMuexMXGcMLk3tGfljtU1j2wq3C1LHtbdLpPLDpsm6gcFqpX4kvyUdWsv+ju7gIFB7n2ngunFCZLdaTIT8JnKT3dNuPBye4wAtEBoPZ/Gj/jL4bBJvIVOdO0EyIKzhK0tO3WL+ENp+bMAjt3bNN5duMqfonfchq8h3L5TRYXiU17Bid7bkqD3lezmeeNaFhpakF862QTf1zNaw9q+o8LYeOJsyCw7qBte73PeQTFAfna7/mA61xpWCcKYuOpj6+vihDVyMCI/7eBQQlmDICGS6Ldk8Q5C6A0dlDIUHsVV5gcHJtOuKicM0ia0R5P0vsTToXc4P3Vy4SxoEWmZ5JiKM/gi6oSBkiSlE0w5SV5GojSmGCKBj9/bsLCnRhb8a15fp8F8SYUPZc1NWxhNGHqx8fYRiWdcG8axFq7QIRMOI+txFjuEhoq2NdQBKm+Iy0FDIKRjE8UnTvggidcYhaPKCtapkzVjtv4pxOeS3UcGE8uC3ltCzejkRDPuKEMHgQuJB7EMOB9DCM+f6DAsVwGMmRGCsy6AL83jPtnT9ayM2c/o40nZtonck2UeY7RfUSR7vN3Fcb3rRHBEVgxEiNuiCAYVZXfpmh4hvck2xoxlK+rLTM820j3zaX27632Ccu/YL75ikYvXzOKa2MWrzBmt/53nwBuiB/jSBuXy5I4qDPC6LAy8poIP5FfzWtkLCqfhWItbjvorc3IsQgPtJWU6c2C0mc6nauHshwOlV3iaolKvg06SPtb2lyMole4myCzSnNymbrE4S5ca9f3TyJJnDuhvHl0k7ifvn4LyBgBFLpuMvMk63ruX9Rh8SIZ72heVieFqGjU1W1HGs5GRTWQj91bpHtWJdV42qQYzt9o8jGVIxP3mV6CIzlhF0Hq9XTMePV5rGt9haWr8VkVxuzZqynCoryjZGaGzTV6DNe7xVLn6Ra6nN1eJDJfA6bHeffnq3i0FnjRU73iAusOBfl7FaGed7PzVhah8tzFqnuWx++zoHj+/zFrx3y8h6tGKPXcVbA1qL/Mudryrl79wvG+4D8Q5LGfuUE9lYa73BK5qY94eR+ydRYkUOuDowpfp7NhqHbl7RIBvf77y6ojpDFJcnb328RkRJHoAuOkDL1s1F9nCPKYF6BET8QBUUWBgPx/g8zpqmM3gcAAA==',
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





