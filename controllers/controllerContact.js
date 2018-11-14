const { Setup } = require('../models/setup')
const Contact = require('../models/contact')
const View = require('../views/view')

class ControllerContact {
    static setup() {
        Setup.init(function (err) {
            if (err) View.displayError(err)
            else View.displayData(`Create table success!`)
        })
    }

    static createContact(name, phone, email, company) {
        let obj = { field: "email", value: email }
        Contact.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else {
                if (!row) {
                    Contact.create(name, phone, email, company, function (err) {
                        if (err) View.displayError(err)
                        else {
                            View.displayData(`New contact added {name: ${name}, phone: ${phone}, email: ${email}, company: ${company}}`)
                        }
                    })
                }
                else {
                    
                    View.displayError(`Email ${email} already exist`)
                }
            }
        })
    }

    static showContacts() {
        Contact.showContacts(function (err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }

    static findOneContact(field, value) {
        let obj = { field: field, value: value }
        Contact.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else View.displayData(row)
        })
    }

    static updateContact(id, field, value) {
        let obj = { field: "id", value: id }
        Contact.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else {
                if (!row) {
                    View.displayError(`Cannot find ID ${id}`)
                }
                else {
                    let obj = { id: id, field: field, value: value }
                    Contact.update(obj, function (err) {
                        if (err) View.displayError(err)
                        else {
                            let objId = { field: "id", value: id }
                            Contact.findOne(objId, function (err, row) {
                                if (err) View.displayError(err)
                                else View.displayData(`Contact updated: \n${JSON.stringify(row, null, 2)}`)
                            })
                        }
                    })
                }
            }
        })
    }

    static deleteContact(id) {
        let obj = { field: "id", value: id }
        Contact.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else {
                if (!row) {
                    View.displayError(`Cannot find ID ${id}`)
                }
                else {
                    let obj = { id: id }
                    Contact.delete(obj, function (err) {
                        if (err) View.displayError(err)
                        else View.displayData(`Contact ID ${id} deleted successfully`)
                    })
                }
            }
        })
    }
}

module.exports = ControllerContact