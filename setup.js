"use strict"
const db = require('./models/Db')

db.serialize(function() {
    db.run('DROP TABLE IF EXISTS Contacts')
    db.run('DROP TABLE IF EXISTS GRoups')
    db.run('DROP TABLE IF EXISTS ContactGroups')

    const createAddressBookQuery = `CREATE TABLE IF NOT EXISTS Contacts 
                                    (
                                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                                        name VARCHAR(100),
                                        company VARCHAR(100),
                                        telpNumber VARCHAR(50),
                                        email VARCHAR(150) UNIQUE
                                    )`

    db.run(createAddressBookQuery, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Table Contacts is created')
        }
    })

    const createGroupsQuery = `CREATE TABLE IF NOT EXISTS Groups 
                                (
                                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                                    name VARCHAR(100)
                                )`

    db.run(createGroupsQuery, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Table Groups is created')
        }
    })

    const createContactGroupsQuery = `CREATE TABLE IF NOT EXISTS ContactGroups 
                                (
                                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                                    contactId INTEGER,
                                    groupId INTEGER,
                                    FOREIGN KEY(contactID) REFERENCES Contacts(id),
                                    FOREIGN KEY(groupID) REFERENCES Groups(id)
                                )`

    db.run(createContactGroupsQuery, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Table Groups is created')
        }
    })                            
})

db.close()
