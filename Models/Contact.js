const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./address_book.db')

const Model = require("./Model.js")

class Contact extends Model{
    constructor( name, company, phone_number, email ){
        super()
        this.name = name,
        this.company = company,
        this.phone_number = phone_number,
        this.email = email
    }

    static create(name, company, phone_number, email, callback){
        let newContact = new Contact(name, company, phone_number, email)

        let qInsert = `INSERT INTO Contacts(name, company, phone_number, email)
                  VALUES("${newContact.name}","${newContact.company}","${newContact.phone_number}","${newContact.email}")
                  `
    
        db.run(qInsert, function(err){
        if(err){
            callback(err)
        } else {
            callback(null)
        }
        })
    }
}

module.exports = Contact