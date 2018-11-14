const Contact = require('../models/Contact')
const View = require('../views/View')

class ContactController {

    static help(){
        View.showData(`
            contact create <name> <company> <phone> <email>
            contact update <field> <value> <whereField> <whereValue>
            contact delete <field> <value>
            contact showContact
            group create <name>
            group update <field> <value> <whereField> <whereValue>
            group delete <field> <value>
            group showGroup
            contactGroup create <contactId> <groupId>
            contactGroup delete <contactId> <groupId>
            contactGroup show`
        )
    }

    static create(name, company, phone, email){
        Contact.create(name, company, phone, email, function(err) {
            if(err) View.showError(err)
            else View.showData("data successfully inserted")
        })
    }

    static update(field, value, whereField, whereValue){
        Contact.update("contacts", field, value, whereField, whereValue, function(err) {
            if(err) View.showError(err)
            else View.showData("update data successfull")
        })
    }

    static delete(whereField, whereValue){
        Contact.deleteContact(whereField, whereValue, function(err) {
            if(err) View.showError(err)
            else View.showData("data has been deleted")
        })
    }

    static showContact(){
        Contact.showContact(function(err, rows) {
            if(err) View.showError(err)
            else View.showList(rows)
        })
    }
}

module.exports = ContactController