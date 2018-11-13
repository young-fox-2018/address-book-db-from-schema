const Contact = require('../models/contact')
const View = require('../views/view')

class ContactController {
    static createTable() {
        Contact.createTable(function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Create table success!`)
            }
        })
    }
    static add(name, email, phone, company) {
        Contact.add(name, email, phone, company, function (err, array) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Data with name ${name} Successfully added, Total Contact: ${array.length}`)
            }
        })
    }

    static readDummyData() {
        Contact.readDummyData(function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Dummy Data success added!`)
            }
        })
    }

    static findOne(field, value) {
        Contact.findOne(field, value, function (err, data) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(data)
            }
        })
    }

    static update(field, newValue, fieldCondition, condition) {
        Contact.update(field, newValue, fieldCondition, condition, function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`success updated`)
            }
        })
    }



}


module.exports = ContactController