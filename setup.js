const db = require("./Database/database")

const sqlContTable = `CREATE TABLE IF NOT EXISTS Contacts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    company VARCHAR,
    telephone VARCHAR,
    email VARCHAR
);
`

const sqlGroupsTable = `CREATE TABLE IF NOT EXISTS Groups(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR
);`

const sqlContactsGroupsTable = `CREATE TABLE IF NOT EXISTS ContactsGroups(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contactId INTEGER,
    groupId INTEGER,
        FOREIGN KEY (contactId) REFERENCES contacts(id)
        FOREIGN KEY (groupId) REFERENCES groups(id)
);`

db.serialize(function(){
    
    db.run(sqlContTable, function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log(`successfully added table contact`)
        }
    })
    
    db.run(sqlGroupsTable, function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log(`successfully added table groups`)
        }
    })

    db.run(sqlContactsGroupsTable, function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log(`successfully added table contact groups`)
        }
    })
})
