const Contact = require('../Models/Contact')
const Group = require('../Models/Group')
const contactGroup = require('../Models/Contact-group')
const Model = require('../Models/Model')
const View = require('../Views/View')

class Controller{

    static execute(cmd, input){
        switch (cmd[0]) {
            case "show":
            Model.findAll(input, function(err,data){
                if(err){
                    View.displayError(err)
                }
                else{
                    View.display(data)
                }
            })
            break;
            
            case "add":
                if(cmd[1] === "contact"){
                    Contact.create(input, function(err,data){
                        if(err){
                            View.displayError(err)
                        }
                        else{
                            View.display(`${data} successfully added to Contacts`)
                        }
                    })
                }
                else if (cmd[1] === "group"){
                    Group.create(input, function(err,data){
                        if(err){
                            View.displayError(err)
                        }
                        else{
                            View.display(`${data} successfully added to Groups`)
                        }
                    })
                }
                else if ( cmd[1] === "contactGroup"){
                    contactGroup.create(input, function(err,data){
                        if(err){
                            View.displayError(err)
                        }
                        else{
                            View.display(`group ID: ${data.groupId} has been registerd with User ID: ${data.contactId} in contactGroups`)
                        }
                    })
                }
            break;
            
            case "update":
                Model.update(cmd[1], input, function(err,data){
                    if(err){
                        View.displayError(err)
                    }
                    else{
                        View.display(`User ID: ${data.id} successfully updated their ${data.where} in ${cmd[1]}`)
                    }
                })
            break;

            case "find":
                Model.findOne(input, function(err,data){
                    if(err){
                        View.displayError(err)
                    }
                    else{
                        View.display(`The data you're trying to find is: ${JSON.stringify(data)}`)
                    }
                })
            break;

            case "delete":
                Model.delete(input, function(err,data){
                    if(err){
                        View.displayError(err)
                    }
                    else{
                        View.display(`${input[2]} has been successfully deleted from ${input[0]}`)
                    }
                })
            break;

            default: View.help()
            break;
        }
    }
}

module.exports = Controller