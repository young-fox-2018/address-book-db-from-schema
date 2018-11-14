const {db} = require('./setup')
const Model = require('../models/model')

class ContactGroups extends Model {
    static create(contactId, groupId, callback) {
        let query = `INSERT INTO contactGroups (contactId, groupId) VALUES (${contactId}, ${groupId})`
        db.run(query, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }

    static findAll(callback) {
        Model.findAll("contactGroups", function(err, data) {
            if (err) callback(err, null)
            else callback(null, data)
        })
    }
}

module.exports = ContactGroups