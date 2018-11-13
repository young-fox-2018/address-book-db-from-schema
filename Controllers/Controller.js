const Contact = require('../Models/contact')
const Group = require('../Models/group')
const ContactGroup = require('../Models/contact-group')
const View = require('../Views/view')

class Controller {
    static addContact(table, data) {
        let newContact = {
            name: data[0],
            company: data[1],
            phone: data[2],
            email: data[3]
        }
        Contact.findOne(table, 'email', newContact.email, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                if (data) {
                    View.showError(`This email:${newContact.email} has been used by another user!`)
                } else {
                    if (this.checkPhone(newContact.phone) === false && this.validateEmail(newContact.email) === false) {
                        View.showError(`Your email & phone number is invalid!`)
                    } else if (this.checkPhone(newContact.phone) === true && this.validateEmail(newContact.email) === false) {
                        View.showError(`Your email is invalid!`)
                    } else if (this.checkPhone(newContact.phone) === false && this.validateEmail(newContact.email) === true) {
                        View.showError(`Your phone number is invalid!`)
                    } else if (this.checkPhone(newContact.phone) === true && this.validateEmail(newContact.email) === true) {
                        Contact.addContact(newContact, (err, data) => {
                            if (err) {
                                View.showError(err, null)
                            } else {
                                let msg = `New contact has been added into database!`
                                View.showData(msg)
                            }
                        })
                    }

                }
            }
        })
    }
    static validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }
    static checkPhone(phone) {
        if (newContact.phone.length > 15 || newContact.phone.length < 8) {
            return false
        } else {
            return true
        }
    }

    static addGroup(table, name) {
        Group.addGroup(name, (err, data) => {
            if (err) {
                View.showError(err)
            } else {
                let msg = `New group has been added into database!`
                View.showData(msg)
            }
        })
    }
    static addContactGroup(contactId, groupId) {
        ContactGroup.addContactGroup(contactId, groupId, (err, data) => {
            if (err) {
                View.showError(err)
            } else {
                let msg = `Data has been added into database!`
                View.showData(msg)
            }
        })

    }
    static updateContact(table, id, field, value) {
        Contact.findOne(table, 'id', id, (err, data) => {
            if (err) {
                View.showError(err)
            } else {
                if (data) {
                    Contact.updateContact(table, id, field, value, (err, data) => {
                        if (err) {
                            View.showError()
                        } else {
                            let msg = `Data has been updated!`
                            View.showData(msg)
                        }
                    })

                } else {
                    View.showError(`Your data is not available in database!`)
                }
            }
        })

    }
    static deleteContact(table, field) {
        Contact.findOne(table, 'id', field, (err, data) => {
            if (err) {
                View.showError(err)
            } else {
                if (data) {
                    Contact.delete(table, field, (err, data) => {
                        if (err) {
                            View.showError(err)
                        } else {
                            let msg = `Your data has been deleted!`
                            View.showData(msg)
                        }
                    })
                } else {
                    View.showError(`Your data is not available in database!`)
                }

            }
        })
    }
    static showContact() {
        Contact.showData((err, data) => {
            if (err) {
                View.showError(err)
            } else {
                View.showData(data)
            }
        })
    }

}

module.exports = Controller