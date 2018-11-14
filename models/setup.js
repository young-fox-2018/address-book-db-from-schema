const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

class Setup {
    static init(callback) {
        db.serialize(function() {
            db.run(`DROP TABLE IF EXISTS contacts`,
                function(err) {
                    if (err) callback(err)
                })
            
            db.run(`DROP TABLE IF EXISTS groups`,
                function(err) {
                    if (err) callback(err)
                })
            
            db.run(`DROP TABLE IF EXISTS contactGroups`,
                function(err) {
                    if (err) callback(err)
                })


            db.run(`CREATE TABLE IF NOT EXISTS contacts (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    phone TEXT NOT NULL,
                    email TEXT NOT NULL,
                    company TEXT NOT NULL)`,
                function(err) {
                    if (err) callback(err)
                })

            db.run(`CREATE TABLE IF NOT EXISTS groups (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL)`,
                function(err) {
                    if (err) callback(err)
                })
            
            db.run(`CREATE TABLE IF NOT EXISTS contactGroups (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    contactId INTEGER NOT NULL,
                    groupId INTEGER NOT NULL,
                        FOREIGN KEY (contactId) REFERENCES contacts(id),
                        FOREIGN KEY (groupId) REFERENCES groups(id))`,
                function (err) {
                    if (err) callback(err)
                })
            callback(null)
        })
    }
}

module.exports = {db, Setup}