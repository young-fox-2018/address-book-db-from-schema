const Model = require('./Model')
const db = require('../Database/db')


class ContactGroup extends Model {
    constructor() {
        super()
    }
    static addContactGroup(contactId, groupId, callback) {
        let query = `INSERT INTO contactGroup (contactId,groupId)VALUES (${contactId},${groupId})`
        db.run(query, (err) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, null)
            }
        })
    }

}
module.exports = ContactGroup