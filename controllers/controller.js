const db = require('../db')
const Contact = require('../models/contact')
const Group = require('../models/group')
const Groupcontacts = require('../models/contact-group')
const View = require('../views/view')

class Controller {
    static createContact(params){
        Contact.create_contact(params, function(err){
            if(err){
                View.displayError(err)
            }
        })

    }
    static updateContact(){

    }
    static deleteContact(){

    }
    static showContact(){

    }

    static createGroup(){

    }
    static updateGroup(){

    }
    static deleteGroup(){

    }
    static showGroup(){
        
    }
}
module.exports = Controller