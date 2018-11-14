const Model = require('../models/Model')
const ContactGroup = require('./ContactGroup')
const db = require('../db')

class Contact extends Model {
    constructor(){
        super()
    }

    static create(name, company, phone, email, cb){
        let query = `INSERT INTO contacts
            (name, company, phone, email) 
            VALUES ("${name}", "${company}", ${phone}, "${email}")
        `
        db.run(query, function(err) {
            if(err) cb(err)
            else cb(null)
        })
    }

    static deleteContact(whereField, whereValue, cb) {
        Contact.findOne("contacts", whereField, whereValue, function (err, data) {
            if (err) cb(err)
            else if(data == undefined) cb("data not found")
            else{
                Contact.delete("contacts", whereField, whereValue, function(err) {
                    if(err) cb(err)
                    else{
                        ContactGroup.findOne("contactGroups", "contactId", data.id, function(err, row) {
                            if(err) cb(err)
                            else if(row !== undefined) {
                                ContactGroup.delete("contactGroups", "contactId", row.contactId, function(err) {
                                    if(err) cb(err)
                                })
                            }
                        })
                        cb(null)
                    }
                })        
            }
        })
    }

    static showContact(cb){
        let query = `SELECT contacts.name, company, phone, email, groups.name as GroupName
        FROM contacts
        JOIN contactGroups
        ON contacts.id = contactId
        JOIN groups 
        ON groupId = groups.id`

        db.all(query, function (err, rows) {
            if(err) cb(err)
            else cb(null, rows)
        })
    }
}

module.exports = Contact