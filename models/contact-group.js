const Model = require('./model')

class ContactGroup {
    static createTable(cb) {
        let fields = `id INTEGER PRIMARY KEY AUTOINCREMENT,
                      contactId INTEGER,
                      groupId INTEGER,
                      FOREIGN KEY (groupId) REFERENCES Groups(id),
                      FOREIGN KEY (contactId) REFERENCES Contacts(id)`

        Model.createTable('contactGroup', fields, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}



module.exports = ContactGroup