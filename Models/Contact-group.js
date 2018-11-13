const Model = require('./Model')

class ContactGroup extends Model {

    static create (contactId, groupId, callback) {
        let create = 
        `
        INSERT INTO contact_group
            (contact_id, group_id)
        VALUES
            ("${contactId}", "${groupId}")
        `
        ContactGroup.runner(create, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

}

module.exports = ContactGroup