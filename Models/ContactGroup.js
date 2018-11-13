const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./address_book.db')

const Model = require("./Model.js")

class ContactGroup extends Model{
    static create(contactId,groupId,callback){

        let qInsert = `INSERT INTO ContactsGroups(contactId,groupId)
                  VALUES("${contactId}","${groupId}")
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

module.exports = ContactGroup