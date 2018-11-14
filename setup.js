const db = require('./db')

db.serialize(function() {

    db.run(`DROP TABLE IF EXISTS contacts`, function(err) {
        if(err) console.log(err)
    })

    db.run(`DROP TABLE IF EXISTS groups`, function(err) {
        if(err) console.log(err)
    })

    db.run(`DROP TABLE IF EXISTS contactGroups`, function(err) {
        if(err) console.log(err)
    })

    db.run(
        `CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT NOT NULL, 
            company TEXT NOT NULL,
            phone INTEGER NOT NULL,
            email TEXT NOT NULL
        )`,
        function(err) {
            if (err) console.log(err)
        }
    )

    db.run(
        `CREATE TABLE IF NOT EXISTS groups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )`,
        function(err) {
            if (err) console.log(err)
        }
    )

    db.run(
        `CREATE TABLE IF NOT EXISTS contactGroups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            contactId INTEGER NOT NULL, 
            groupId INTEGER NOT NULL,
                FOREIGN KEY (contactId) REFERENCES contacts(id)
                FOREIGN KEY (groupId) REFERENCES groups(id)
        )`,
        function(err) {
            if (err) console.log(err)
        }
    )
})

db.close()
