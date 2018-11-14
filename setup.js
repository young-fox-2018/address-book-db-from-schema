const db = require('./database')

db.serialize(function(err){
    if(err){
        console.log(`di serialize nih errornya : ${err}`)
    }else{
        const tablecontacts = `CREATE TABLE contacts (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name VARCHAR(30),
                        company VARCHAR(20),
                        phone VARCHAR(13),
                        email VARCHAR(30)
        )`
        const tablegroups = `CREATE TABLE groups (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name VARCHAR(20)
        )`
        const tablecontactgroup = `CREATE TABLE contactgroup (
                                    contact_id INTEGER,
                                    group_id INTEGER,
                                    FOREIGN KEY (contact_id) REFERENCES contacts(id),
                                    FOREIGN KEY (group_id) REFERENCES groups(id)
        )`
        db.run(tablecontacts,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`Table contacts is created`)
            }
        })
        db.run(tablegroups,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`Table groups is created`)
            }
        })
        db.run(tablecontactgroup,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`Table contactgroup is created`)
            }
        })
    }
})
db.close()