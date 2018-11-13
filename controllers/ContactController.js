const Model = require('../models/model')
const Contact = require('../models/contact')
const View = require('../views/view')

class ContactController {
    static findAll() {
        Model.findAll('Contacts', (err, data) => {
            if (err) View.showErr(err)
            else View.showData(data)
        })
    }
    static findOne(data) {
        // View.showData(data)
        Model.findOne({field: data[0], value: data[1]}, 'Contacts', (err, data) => {
            if (err) View.showErr(err)
            else View.showData(data)
        })
    }
    static update(data) {
        Model.update({field: data[0], value: data[1], updateValue: data[2]}, 'Contacts', (err, data) => {
            if (err) View.showErr(err)
            else View.showData('Successfully updated')
        })
    }
    static create(data) {
        Contact.create({
            name: data[0],
            company: data[1],
            phone: data[2],
            email: data[3]
        }, err => {
            if (err) View.showErr(err)
            else View.showData(`Successfully added new contacts`)
        })
    }
    static delete(data) {
        Model.delete({field: data[0], value: data[1]}, 'Contacts', (err, data) => {
            if (err) View.showErr(err)
            else View.showData('Successfully deleted!')
        })
    }
}

module.exports = ContactController