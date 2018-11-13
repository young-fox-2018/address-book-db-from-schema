"use strict"

const View = require('../views/View.js')
const ContactGroup = require('../models/GroupContacts.js')

class ContactGroupController {
    static createContactGroup(input) {
        console.log('masuk ga')
        if (!input[0] || !input[1]) {
            View.printError('Missing input')
        } else {
            let contact = {
                contactId : input[0],
                groupId: input[1]
            }

            ContactGroup.create('ContactGroups', contact, err => {
                if (err) {
                    View.printError(' Failed to add contact group')
                } else {
                    View.printData('Data successfully added')
                }
            })
        }
    }

    static updateContactGroup(data) {
        if (!data[0] || !data[1] || !data[2]) {
            View.printError('Missing input')
        } else {
            let contact = {
                id : data[0],
                field : data[1],
                value : data[2] 
            }
            ContactGroup.update('ContactGroups', contact, err => {
                if (err) {
                    View.printError('Failed to update contact group ')
                } else {
                    View.printData(`Update  contact group with id: ${contact.id} success`)
                }
            })
        }  
    }

}

module.exports= ContactGroupController