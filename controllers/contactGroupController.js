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
        ContactGroup.add(contactId, groupId, function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Successfully added contact ID : ${contactId} and group ID : ${groupId}`)
            }
        })
    }
    static showContactGroup(groupName) {
        ContactGroup.showcontactGroup(groupName, function (err, data) {
            if (err) {
                View.showErr(err)
            } else {
                let listContact = ''
                data.forEach(function (element, index) {
                    if (index !== data.length - 1) {
                        listContact += `${index + 1}.${element.name} \n`
                    } else {
                        listContact += `${index + 1}.${element.name}`
                    }
                })
                View.showData(`Group ${groupName}:
    
${listContact}`)
            }
        })
    }
}


module.exports = ContactGroupController