const Model = require('../models/model')
const Contact = require('../models/contact')

class ContactController {
    static findAll() {
        Model.findAll('Contacts', (err, data) => {
            if (err) console.log(err)
            else console.log(data)
        })
    }
    static findOne(data) {
        // console.log(data)
        Model.findOne({field: data[0], value: data[1]}, 'Contacts', (err, data) => {
            if (err) console.log(err)
            else console.log(data)
        })
    }
    static update(data) {
        Model.update({id: data[0], field: data[1], value: data[2]}, 'Contacts', (err, data) => {
            if (err) console.log(err)
            else console.log('Successfully updated')
        })
    }
    static create(data) {
        Contact.create({
            name: data[0],
            company: data[1],
            phone: data[2],
            email: data[3]
        }, err => {
            if (err) console.log(err)
            else console.log(`Successfully added new contacts`)
        })
    }
}

module.exports = ContactController