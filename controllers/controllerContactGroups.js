const ContactGroups = require('../models/contact-group')
const Contact = require('../models/contact')
const Group = require('../models/group')
const View = require('../views/view')

class ControllerContactGroups {
    static createContactGroups(contactEmail, groupName) {
        ContactGroups.findAll(function (err, data) {
            if (err) {
                View.displayError(err)
            }
            else {
                let cgData = data
                Contact.findAll(function (err, data) {
                    if (err) View.displayError(err)
                    else {
                        let contactData = data
                        Group.findAll(function (err, data) {
                            if (err) View.displayError(err)
                            else {
                                let groupData = data
                                let check3 = false
                                contactData.forEach(contacts => {
                                    if (contacts.email == contactEmail) {
                                        let check2 = false
                                        groupData.forEach(groups => {
                                            if (groups.name == groupName) {    
                                                let check = false
                                                cgData.forEach(element => {
                                                    if (element.contactId == contacts.id && element.groupId == groups.id) {
                                                        View.displayError(`Contact ID ${contacts.id} already joined group ID ${groups.id}`)
                                                        check = true
                                                    }
                                                });
                                                if (!check) {
                                                    ContactGroups.create(contacts.id, groups.id, function (err) {
                                                        if (err) View.displayError(err)
                                                        else View.displayData(`Contact ID ${contacts.id} success join group ID ${groups.id}`)
                                                    })
                                                }
                                                check2 = true
                                            }
                                        })
                                        if (!check2) {
                                            View.displayError(`Incorrect group name`)
                                        }
                                        check3 = true
                                    }
                                })
                                if (!check3) {
                                    View.displayError(`Incorrect email`)
                                }
                            }
                        })
                    }
                })
            }
        })
    }
}

module.exports = ControllerContactGroups