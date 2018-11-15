const db = require('./db')

let qContacts =`
CREATE TABLE IF NOT EXISTS contacts
(id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100),
company VARCHAR(100),
phone VARCHAR(50),
email VARCHAR(50));`

let qGroups =`
CREATE TABLE IF NOT EXISTS groups
(id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100));`

let qContactsGroups =`
CREATE TABLE IF NOT EXISTS contacts_groups
(id INTEGER PRIMARY KEY AUTOINCREMENT,
contactId VARCHAR(100),
groupId VARCHAR(100));`

db.serialize(function() {
    db.run('DROP TABLE IF EXISTS contacts')
    db.run('DROP TABLE IF EXISTS groups')
    db.run('DROP TABLE IF EXISTS contacts_groups')
    db.run(qContacts, function(err) {
        if (err) {
            console.log({message: "err contacts table", err: err});
        }
    })
    db.run(qGroups, function(err) {
        if (err) {
            console.log({message: "err groups table", err: err});
        }
    })
    db.run(qContactsGroups, function(err) {
        if (err) {
            console.log({message: "err contacts_groups table", err: err});
        }
    })
})