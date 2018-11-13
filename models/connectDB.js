const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/addressBook.db')


module.exports = db

