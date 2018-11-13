const Model = require('./Model')
const db = require('../Database/db')

class Contact extends Model {
    constructor() {
        super()
    }
    static addContact(newContact, callback) {
        let query = `INSERT INTO contacts (name,company,phone,email) 
        VALUES ('${newContact.name}','${newContact.company}',${newContact.phone},'${newContact.email}')`
        db.run(query, (err) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, null)
            }
        })
    }
    static updateContact(table, id, field, newData, callback) {
        let query = `UPDATE ${table} SET ${field}='${newData}'
                    WHERE id=${id}`
        db.run(query, (err) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, null)
            }
        })

    }
    static showData(callback) {
        let query = `SELECT DISTINCT a.name,a.company,a.phone,a.email,c.name group_name FROM contacts a
                   JOIN contactGroup b ON a.id=b.contactId
                   JOIN groups c ON b.groupId=c.id`
        db.all(query, (err, rows) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, rows)
            }
        })
    }
}


module.exports = Contact