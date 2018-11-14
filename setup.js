
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("address.db");

db.serialize(function() {
    let tableContact = `CREATE TABLE contact (
        contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR (50),
        email VARCHAR (20),
        company TEXT, 
        phone_number TEXT 
    );`
    db.run(tableContact, function(err) {
        if(err) console.log(err);
        console.log("berhasil bikin table")
    })
})