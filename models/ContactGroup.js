const Model = require('./Model')
const db = require('../db')

class ContactGroups extends Model {
    constructor(){
        super()
    }

    static create(contactId, groupId, cb){
        let query = `INSERT INTO contactGroups
            (contactId, groupId) 
            VALUES (${contactId}, ${groupId})
        `
        db.run(query, function(err) {
            if(err) cb(err)
            else cb(null)
        })
    }

    static deleteSelected(contactId, groupId, cb){
        let query = `DELETE FROM contactGroups
            WHERE contactGroups.contactId = ${contactId} AND contactGroups.groupId = ${groupId}`
        db.run(query, function(err) {
            if (err) cb(err)
            else cb(null)
        })
    }

    static showContactGroup(cb) {
        let query = `SELECT contacts.name as name, groups.name as groupName
        FROM contactGroups
        JOIN contacts
        ON contactId = contacts.id
        JOIN groups
        ON groupId = groups.id`
        db.all(query, function(err, rows) {
            if (err) cb(err)
            else cb(null, rows)
        })
    }
}

module.exports = ContactGroups