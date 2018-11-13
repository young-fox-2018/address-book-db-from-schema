const db = require('./setupDb')

db.serialize(function(){
    const contacts = `CREATE TABLE IF NOT EXISTS Contacts 
                    (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name VARCHAR(100),
                        company VARCHAR,
                        phoneNo VARCHAR(100) UNIQUE,
                        email VARCHAR
                    );`
    
    db.run(contacts,function(err){
        if (err){
            console.log("ERR create Contacts Table: ", err)
        }
        else{
            console.log("Contacts Table has been created")
        }
    })
    

    const groups = `CREATE TABLE IF NOT EXISTS Groups
                    (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name VARCHAR UNIQUE
                    );`

    db.run(groups,function(err){
        if(err){
            console.log("ERR create Groups Table: ", err)
        }
        else{
            console.log("Groups Table has been created")
        }
    })
    
    const contactGroups = `
    CREATE TABLE IF NOT EXISTS contactGroups
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        groupId INTEGER,
        contactId INTEGER,
            FOREIGN KEY (groupId) REFERENCES Groups(id),
            FOREIGN KEY (contactId) REFERENCES Contacts(id)
    );
    `
    db.run(contactGroups,function(err){
        if(err){
            console.log("ERR create contactGroups Table: ", err)
        }
        else{
            console.log("contactGroups Table has been created")
        }
    })
})

db.close()