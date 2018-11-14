
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("address_book.db");

db.serialize(function() {
    let tableContact = `CREATE TABLE contact (
        contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR (50),
        email VARCHAR (20),
        company TEXT, 
        phone_number TEXT 
    );`
    
    let tableGroup = `CREATE TABLE groups (
        groups_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR
    );`

    let tableBridge = `CREATE TABLE contact_group (
        contactsId INTEGER, 
        groupsId INTEGER, 
        FOREIGN KEY (contactsId) REFERENCES voters(contact_id),
        FOREIGN KEY (groupsId) REFERENCES politicians(group_id)
    );`
    
    db.run(tableContact, function(err) {
        if(err) console.log(err);
        console.log("successfully created contact table!")
    })

    db.run(tableGroup, function(err){
        if(err){
            console.log(err)
        } else {
            console.log("successfully created group table!")
        }
    })

    db.run(tableBridge, function(err) {
        if(err) console.log(err)
        console.log("success!")
    })
})