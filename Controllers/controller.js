const Contact = require("../Models/contact");
const Group = require("../Models/group");
const ContactGroup = require("../Models/contact-Group");
const View = require("../Views/view")

class Controller{

    static execute(command, option){

        switch (command) {
            case "insert":
                switch (option[0]) {
                    case "contact":
                        Controller.addContact({
                            name: option[1],
                            company: option[2],
                            telephone: option[3],
                            email: option[4]
                        })
                        break;
                
                    case "group":
                        Controller.addGroup({
                            name: option[1]
                        })
                        break;

                    case "contactGroup":
                        Controller.addContactGroup({
                            contactId: option[1],
                            groupId: option[2],
                        })
                        break;

                    default:
                        break;
                }
                break;
        

            case "findOne":
                switch (option[0]) {
                    case "contact":
                        Controller.findOneContact({
                            field: option[1],
                            value: option[2]
                        })
                        break;
                    case "group":
                        Controller.findOneGroup({
                            field: option[1],
                            value: option[2]
                        })
                        break;

                    case "contactGroup":
                        Controller.findOneContactGroup({
                            field: option[1],
                            value: option[2]
                        })
                        break;
                
                    default:
                        break;
                }

            case "findAll":
                switch (option[0]) {
                    case "contact":
                        Controller.findAllContact({
                            field: option[1],
                            value: option[2]
                        })
                    break;
                    case "group":
                        Controller.findAllGroup({
                            field: option[1],
                            value: option[2]
                        })
                    break;
                    case "contactGroup":
                        Controller.findAllContactGroup({
                            field: option[1],
                            value: option[2]
                        })
                    break;
                
                    default:
                        break;
                }
            default:
                break;
        }
    }

    static addContact(input){
        Contact.create(input, function(err){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(`successfully added ${input.name} to table Contacts`)
            }
        })
    }

    static addGroup(input){
        Group.create(input, function(err){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(`successfully added ${input.name} to table Groups`)
            }
        })
    }

    static addContactGroup(input){
        ContactGroup.create(input, function(err){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(`successfully added data to table ContactsGroups`)
            }
        })
    }

    static findOneContact(input){
        Contact.readOne(input, function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(data)
            }
        })
    }

    static findOneGroup(input){
        Group.readOne(input, function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(data)
            }
        })
    }
    static findOneContactGroup(input){
        ContactGroup.readOne(input, function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(data)
            }
        })
    }

    static findAllContact(input){
        Contact.readAll(input, function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(data)
            }
        })
    }

    static findAllGroup(input){
        Group.readAll(input, function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(data)
            }
        })
    }
    static findAllContactGroup(input){
        ContactGroup.readAll(input, function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(data)
            }
        })
    }


}

module.exports = Controller