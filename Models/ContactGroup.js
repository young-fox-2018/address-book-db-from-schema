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

    static showContact(callback){
        let query = `
                    SELECT name,company,phone_number,email,group_name 
                    FROM ((ContactsGroups
                    INNER JOIN Contacts ON ContactsGroups.contactId = Contacts.id)
                    INNER JOIN Groups ON ContactsGroups.groupId = Groups.id)
                    GROUP BY name,groupId
                    `
        db.all(query, function(err,data){
            if(err){
                callback(err)
            } else {
                callback(data)
            }
        })    
    }
}

module.exports = ContactGroup