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
    static readDummyData() {
        ContactGroup.readDummyData(function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Dummy Data success added!`)
            }
        })
    }
    static add(contactId, groupId) {
        ContactGroup.add(contactId, groupId, function (err, array) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Successfully added contact ID : ${contactId} and group ID : ${groupId}, Total contactGroup: ${array.length}`)
            }
        })
    }
}


module.exports = ContactGroupController