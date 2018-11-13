const Model = require('./model')
const fs = require('fs')
const dataContactGroup = JSON.parse(fs.readFileSync('./database/contactGroup.json'))

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
    static readDummyData(cb) {
        for (let i = 0; i < dataContactGroup.length; i++) {
            let dummyContactGroup = `(null, "${dataContactGroup[i].contactId}", "${dataContactGroup[i].groupId}")`
            Model.create('contactGroup', dummyContactGroup, function (err) {
                if (err) {
                    cb(err)
                }
            })
        }
        cb(null)
    }
    static add(contactId, groupId, cb) {
        let data = `(null, "${contactId}", "${groupId}")`
        Model.create('contactGroup', data, function (err) {
            if (err) {
                cb(err)
            } else {
                Model.findAll('contactGroup', function (err, array) {
                    if (err) {
                        cb(err, null)
                    } else {
                        cb(null, array)
                    }
                })
            }
        })
    }
}



module.exports = ContactGroup