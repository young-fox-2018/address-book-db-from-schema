"use strict"

const View = require('../views/View.js')
const Contact = require('../models/Contacts.js')

class ContactController {
    static addContact(input) {
        if (!input[0] || !input[1] || !input[2] || !input[3]) {
            View.printError('Missing input')
        } else {
            let contact = {
                name : input[0],
                company : input[1],
                telpNumber : input[2],
                email : input[3]
            }

            Contact.create('Contacts', contact, err => {
                if (err) {
                    View.printError(' Failed to add contact')
                } else {
                    View.printData('Data successfully added')
                }
            })
        }
    }

    static getAllContacts() {
        Contact.getAll('Contacts', (err, rows) => {
            if (err) {
                View.printError('Failed to get contacts')
            } else {
                View.printData(rows)
            }
        })
    }


    static getOneContact(data) {
        if (!data[0] || !data[1]) {
            View.printError('Missing inputs')
        } else {
            let contact = {
                field : data[0],
                value : data[1]
            }

            Contact.getOne('Contacts', contact, (err, row) => {
                if (err) {
                    View.printError('Failed to get contacts')
                } else {
                    Contact.showContact(row, (contactErr, result)=> {
                        if (err) {
                            View.printError(contactErr)
                        } else {
                            View.printData(result)
                        }
                    })
                    
                }
            })
        }  
    }

    static updateContact(data) {
        if (!data[0] || !data[1] || !data[2]) {
            View.printError('Missing input')
        } else {
            let contact = {
                id : data[0],
                field : data[1],
                value : data[2] 
            }
            Contact.update('Contacts', contact, err => {
                if (err) {
                    View.printError('Failed to update contact')
                } else {
                    View.printData(`Update  contact with id: ${contact.id} success`)
                }
            })
        }  
    }

    static deleteContact(data) {
        if (!data[0] || !data[1]) {
            View.printError('Missing input')
        } else {
            let contact = {
                field : data[0],
                value : data[1],
                field2 : 'contactId'
            }
            Contact.delete('Contacts', contact, err => {
                if (err) {
                    View.printError(err)
                } else {
                    View.printData('Contact successfully deleted')
                }
            })
        }
    }
}

module.exports = ContactController
