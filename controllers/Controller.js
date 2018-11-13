const Contacts = require('../models/Contacts');
const Groups = require('../models/Groups');
const ContactGroup = require('../models/ContactGroup');
const Views = require('../views/View');

class Controller {

    static execute(args) {
        const command = args[0];
        const data = args.slice(1);

        switch(command) {
            case 'show': Controller.show(data); break;
            case 'add': Controller.add(data); break;      
            case 'update': Controller.update(data); break;
            case 'delete': Controller.delete(data); break;
            case 'find': Controller.find(data); break;
            case 'invite': Controller.invite(data); break;
            case 'kick': Controller.kick(data); break;
            default: Views.help(); break;                     
        }
    }

    static add(data) {
        if (data[0].toLowerCase() === 'contact'){
            if (data.length !== 5) {
                Views.displayError(`Please input data name, company, phone and email!`);
            } else {
                Contacts.addContact({name: data[1], company: data[2], phone: data[3], email: data[4]}, function(err) {
                    if (err) {
                        Views.displayError(err);
                    } else {
                        Views.displaySuccess(`Contact added to database!`);
                    }
                })
            }
        } else if (data[0].toLowerCase() === 'group') {
            if (data.length !== 2) {
                Views.displayError(`Please input group name`);
            } else {
                Groups.addGroup({group_name: data[1]}, function(err){
                    if (err) {
                        Views.displayError(err);
                    } else {
                        Views.displaySuccess(`Group added to database!`);
                    }
                });
            }
        }
    }

    static update(data) {
        if (data[0].toLowerCase() === 'contact') {
            const id = Number(data[1]);
            data = data.slice(2);
            
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
            });
        } else if (data[0].toLowerCase() === 'group') {
            const id = Number(data[1]);
            data = data.slice(2);
            let options = {id: id, group_name: data[0]};
            Groups.update(id, options, function(err) {
                if (err) {
                    Views.displayError(err);
                } else {
                    Views.displaySuccess(`Group updated!`);
                }
            });
        }
    }

    static delete(data) {
        if (data[0].toLowerCase() === 'contact') {
            const options = { field: "id", value: data[2]};
            Contacts.delete(options, function(err) {
                if (err) {
                    Views.displayError(err);
                } else {              
                    ContactGroup.deleteSome({field: "contact_id", value: options.value}, function(err) {
                        if (err) {
                            Views.displayError(err);
                        } else {
                            Views.displaySuccess(`Contact deleted!`);
                        }
                    });                    
                }
            });
        } else if (data[0].toLowerCase() === 'group') {
            const options = {field: "id", value: data[2]};

            Groups.delete(options, function(err){
                if (err) {
                    Views.displayError(err);
                } else {
                    ContactGroup.deleteSome({field: "group_id", value: options.value}, function(err) {
                        if (err) {
                            Views.displayError(err);
                        } else {
                            Views.displaySuccess(`Group deleted!`);
                        }
                    })
                }
            });
        }
    }

    static show(data) {
        if (data[0].toLowerCase() === 'contacts') {
            Contacts.findAll(function(err, rows) {
                if (err) {
                    Views.displayError(err);
                } else {
                    Views.displayAll(rows);
                }
            });
        } else if (data[0].toLowerCase() === 'groups') {
            Groups.findAll(function(err, rows) {
                if (err) {
                    Views.displayError(err);
                } else {
                    Views.displayAll(rows);
                }
            });
        }
    }

    static find(data) {
        if (data[0].toLowerCase() === 'contacts' || data[0].toLowerCase() === 'contact') {
            const options = {field: data[1], value: data[2]};
            Contacts.findOne(options, function(err, row) {
                if (err) {
                    Views.displayError(err);
                } else {
                    Views.displayAll(row);
                }
            });
        } else if (data[0].toLowerCase() === 'groups' || data[0].toLowerCase() === 'group') {
            let options = {field: data[1], value: data[2]};            
            Groups.findOne(options, function(err, row) {
                if (err) {
                    Views.displayError(err);
                } else {
                    Views.displayAll(row);
                }
            });
        } 
    }

    static invite(data) {
        const group = data[0];        
        const options = {field: data[1], value: data[2]};        

        Groups.findOne({field: 'group_name', value: group}, function(err, group) {
            if (err) {
                Views.displayError(err);
            } else {                                
                Contacts.findOne(options, function(err, contact) {
                    if (err) {
                        Views.displayError(err);
                    } else {                                                
                        ContactGroup.create({contact_id: contact.id, group_id: group.id}, function(err) {
                            if (err) {
                                Views.displayError(err);
                            } else {
                                Views.displaySuccess(`Member ${contact.name} joined group ${group.group_name}.`);
                            }
                        });
                    }
                });
            }
        });
    }

    static kick(data) {
        console.log(`kick`, data);
    }
}

module.exports = Controller; 