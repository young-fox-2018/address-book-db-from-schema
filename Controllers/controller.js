const Contact = require("../Models/contact");
const Group = require("../Models/group");
const ContactGroup = require("../Models/contact-Group");
const View = require("../Views/view")
const db = require("../Database/database")

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
                        Controller.help()
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
                    Controller.help()
                        break;
                }
                break;

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
                    Controller.help()
                        break;
                }
                break;

            case "delete":
                switch (option[0]) {
                    case "contact":
                        Controller.deleteContact({
                            field: option[1],
                            value: option[2]
                        })
                    break;
                    case "group":
                        Controller.deleteGroup({
                            field: option[1],
                            value: option[2]
                        })
                    break;
                    case "contactGroup":
                        Controller.deleteContactGroup({
                            field: option[1],
                            value: option[2]
                        })
                    break;
                
                    default:
                    Controller.help()
                        break;
                }
                break;

            case "help":
                Controller.help()
                break;

            default:
                Controller.help()
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
        db.serialize(function(){
            
            Contact.readOne(input, function(err, data){
                if(err){
                    View.displayErr(err)
                }
                else{
                    // View.displaySuccess(data)
                    ContactGroup.readAll({
                        field : "contactId",
                        value : data.id
                    }, function(err, groups){
                        if(err){
                            View.displayErr(err);
                        }
                        else {
                            data.groups = []
                            for(let i = 0; i < groups.length; i++){
                                db.serialize(function () {
                                    Group.readOne({
                                        field: "id",
                                        value: groups[i].groupId
                                    },function(err,grup){
                                        data.groups.push(grup.name)
                                        if(i == groups.length-1){
                                            View.displaySuccess(data)
                                        }
                                    })
                                })
                            }
                        }
                    })
                }
            })
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

    static deleteContact(input){
        Contact.delete(input,function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(`successfully deleted contact`)
                ContactGroup.delete({
                    field : "contactId",
                    value: input.value
                }, function(err){
                    if(err){
                        View.displayErr(err)
                    }
                    else{
                        View.displaySuccess(`Sucessfully deleted contact group`)
                    }
                })
            }
        })
    }

    static deleteGroup(input){
        Group.delete(input,function(err, data){
            if(err){
                View.displayErr(err)
            }
            else{
                View.displaySuccess(`successfully deleted group`)
                ContactGroup.delete({
                    field : "groupId",
                    value: input.value
                }, function(err){
                    if(err){
                        View.displayErr(err)
                    }
                    else{
                        View.displaySuccess(`Sucessfully deleted contact group`)
                    }
                })
            }
        })
    }

    static help(){
        View.displaySuccess(`
        This program is Beta version, by Kevin Wijaya;
        Here is some of the command:
        insert <table_name> <field_name> <value>
        findOne <table_name> <field_name> <value>
        findAll <table_name> <field_name> <value>
        delete <table_name> <field_name> <value>
        `)
    }

}

module.exports = Controller