const ContactGroups = require('../models/ContactGroup')
const View = require('../views/View')

class ContactGroupsController {

    static create(contactId, groupId){
        ContactGroups.create(contactId, groupId, function(err) {
            if(err) View.showError(err)
            else View.showData("data successfully inserted")
        })
    }

    static delete(contactId, groupId){
        ContactGroups.deleteSelected(contactId, groupId, function(err) {
            if(err) View.showError(err)
            else View.showData("data deleted successfully")
        })
    }

    static show(){
        ContactGroups.showContactGroup(function(err, rows) {
            if(err) View.showError(err)
            else View.showList(rows)
        })
    }
}

module.exports = ContactGroupsController