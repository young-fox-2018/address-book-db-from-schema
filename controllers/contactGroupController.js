const ContactGroup = require('../models/contact-group')
const View = require('../views/view')

class ContactGroupController {
    static createTable() {
        ContactGroup.createTable(function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Create table success!`)
            }
        })
    }
}


module.exports = ContactGroupController