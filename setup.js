const db = require('./db')

db.serialize(function(){
    const queryContacts = `CREATE TABLE Contacts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),     
        company VARCHAR(50),
        no_telp VARCHAR(17),
        email VARCHAR (50)
        );`
    db.run("DROP TABLE IF EXISTS Contacts;")

    db.run(queryContacts, function(err){
        if(err) {
            console.log(err)
        }else{
            console.log("Table Contacts created")
        }
    })

    const queryGroups= `CREATE TABLE Groups(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(20)
        );`
    db.run("DROP TABLE IF EXISTS Groups;")
    db.run(queryGroups, function(err){
        if(err) {
            console.log(err)
        }else{
            console.log("Table Groups created")
        }
    })
    const queryGroupcontacts= `CREATE TABLE Groupcontacts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_contact INT,
        id_group INT,
        FOREIGN KEY (id_contact) REFERENCES Contacts(id),
        FOREIGN KEY (id_group) REFERENCES Groups(id)
        );`

    db.run("DROP TABLE IF EXISTS Groupcontacts;")
    db.run(queryGroupcontacts, function(err){
        if(err) {
            console.log(err)
        }else{
            console.log("Table Groupcontact created")
        }
    })
})