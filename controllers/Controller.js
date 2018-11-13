const Contacts = require('../models/Contacts');
const Groups = require('../models/Groups');
const Views = require('../views/View');

class Controller {

    static execute(args) {
        const command = args[0];
        const data = args.slice(1);

        switch(command) {
            case 'addContact' : Controller.addContact(data); break;
            case 'updateContact' : Controller.updateContact(data); break;
            case 'deleteContact' : Controller.deleteContact(data); break;
            case 'getAllContacts' : Controller.getAllContacts(); break;
            case 'getContact' : Controller.getContact(data); break;
            default: Views.help(); break;
            // addGroup
            // getAllGroup
            // getGroup
            // updateGroup
            // deleteGroup
            // kickFromGroup namaGroup fieldContact valueContact
            // invite namaGroup fieldContact valueContacts
        }
    }

    static addContact(data) {
        Contacts.addContact({name: data[0], company: data[1], phone: data[2], email: data[3]}, function(err) {
            if (err) {
                Views.displayError(err);
            } else {
                Views.displaySuccess(`Contact added to database!`);
            }
        })
    }

    static updateContact(data) {
        const id = data[0];
        data = data.slice(1);
        
        let options = {};
        for (let i = 0; i < data.length; i+=2) {
            options[data[i]] = data[i+1];
        }

        Contacts.update(id, options, function(err) {
            if (err) {
                Views.displayError(err);
            } else {
                Views.displaySuccess(`Contact updated!`);
            }
        })
    }

    static deleteContact(data) {
        const options = { field: data[0], value: data[1]};        
        Contacts.delete(options, function(err) {
            if (err) {
                Views.displayError(err);
            } else {
                Views.displaySuccess(`Success deleting data!`);
            }
        })

    }

    static getAllContacts() {        
        Contacts.findAll(function(err, rows) {
            if (err) {
                Views.displayError(err);
            } else {
                Views.displayAll(rows);
            }
        })
    }

    static getContact(data) {
        let options = {field: data[0], value: data[1]};        
        Contacts.findOne(options, function(err, row) {
            if (err) {
                Views.displayError(err);
            } else {
                Views.displayAll(row);
            }
        });
    }
}

module.exports = Controller;