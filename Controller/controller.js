
const Model = require("../Models/contact");
const View = require("../Views/view")

class AddressBook {
    static createContact(name, email, company, phone_number) {
        Model.createContact(name, email, company, phone_number, function(err, data){
            if(err) {
                View.displayCreateContact(err)
            } else {
                View.displayCreateContact(data)
            }
        })
    }
    static showContacts() {
        Model.showContact(function(err, data){
            if(err) {
                View.showContacts(err, null)
            } else {
                View.showContacts(null, data)
            }
        })
    }
}

module.exports = AddressBook