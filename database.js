const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('./address_book.db')

module.exports = db