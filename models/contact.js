const Model = require('./model')
const fs = require('fs')
const dataContact = JSON.parse(fs.readFileSync('./database/contact.json'))

class Contact {
    static createTable(cb) {
        let fields = `id INTEGER PRIMARY KEY AUTOINCREMENT,
                     name TEXT NOT NULL,
                     email TEXT NOT NULL,
                     phone TEXT NOT NULL,
                     company TEXT NOT NULL`
        Model.createTable('Contacts', fields, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
    static add(name, email, phone, company, cb) {
        let data = `(null, "${name}", "${email}", "${phone}", "${company}")`
        Model.create('Contacts', data, function (err) {
            if (err) {
                cb(err)
            } else {
                Model.findAll('Contacts', function (err, array) {
                    if (err) {
                        cb(err, null)
                    } else {
                        cb(null, array)
                    }
                })
            }
        })

    }
    static readDummyData(cb) {
        for (let i = 0; i < dataContact.length; i++) {
            let dummyContact = `(null, "${dataContact[i].name}", "${dataContact[i].email}", "${dataContact[i].phone}","${dataContact[i].company}")`
            Model.create('Contacts', dummyContact, function (err) {
                if (err) {
                    cb(err)
                }
            })
        }
        cb(null)
    }

    static findOne(field, value, cb) {
        Model.findOne('Contacts', field, value, function (err, data) {
            if (err) {
                cb(err)
            } else {
                cb(data)
            }
        })
    }
    static update(field, newValue, fieldCondition, condition, cb) {
        Model.update('Contacts', field, newValue, fieldCondition, condition, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = Contact