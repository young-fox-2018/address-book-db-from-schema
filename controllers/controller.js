const db = require('../db')
const Contact = require('../models/contact')
const Group = require('../models/group')
const Groupcontacts = require('../models/contact-group')
const View = require('../views/view')

class Controller {

    static checkEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        }
            return false
    }
    static checkPhone(phone_num){
        if(phone_num.length > 17){
            return false
        }
        return true
    }
    static createContact(params){
        if(Controller.checkEmail(params[3])){
            if(Controller.checkPhone(params[2])){
                Contact.create_contact(params, function(err){
                    if(err){
                        View.displayError(err)
                    }else{
                        View.displaySuccess("contact created")
                    }
                })
            }else{
                View.displayError("Maximal phone digit 17!") 
            }
        }else{
            View.displayError("Please enter an email address!")
        }
    }
    static updateContact(params){
        let findId = {field: "name", 
                    value: params[0]
                    }
        Contact.findOne(findId, function(err, data){
            if(err){
                View.displayError(err)
            }else{
                if(data){
                    let input = {id: data.id, field: params[1], value: params[2]}
                    if(params[1] === 'email'){
                        if(!Controller.checkEmail(params[2])){
                            View.displayError("Please enter an email address!")  
                        }else{
                            Contact.updateContact(input, function(err){
                                if(err){
                                    View.displayError(err) 
                                }else{
                                    View.displaySuccess("contact updated")
                                }
                            })
                        }
                    }else{
                    }                   
                }else{
                    View.displayError({ err : "Data not found" }) 
                }
            }
        })
    }
    static deleteContact(params){
        let findId = {field: "name", 
                    value: params[0]
                    }
        Contact.findOne(findId, function(err, data){
            if(err){
                View.displayError(err)
            }else{
                if(data){
                    let input = {id: data.id}
                    Contact.deleteContact(input, function(err){
                        if(err){
                            View.displayError(err) 
                        }else{
                            View.displaySuccess("contact deleted")
                            Groupcontacts.execute(`DELETE FROM Groupcontacts WHERE Groupcontacts.id_contact =  ${data.id};`, function(err){
                                if(err){
                                    View.displayError(err)
                                }else{
                                    View.displaySuccess("contact in  Groupcontactdeleted ")
                                }
                            })
                        }
                    })
                }else{
                    View.displayError({ err : "Data not found" }) 
                }
            }
        })
    }
    static showContact(){
        Contact.showContact(function(err, data){
            if(err){
                View.displayError(err)
            }else{
                View.displaySuccess(data)
            }
        })
    }

    static createGroup(params){
        Group.create_group(params, function(err){
            if(err){
                View.displayError(err)
            }else{
                View.displaySuccess("group created")
            }
        })
    }
    static updateGroup(params){
        let findId = {field: "name", 
                    value: params[0]
                    }
        Group.findOne(findId, function(err, data){
            if(err){
                View.displayError(err)
            }else{
                if(data){
                    let input = {id: data.id, field: "name", value: params[1]}
                    Group.updateGroup(input, function(err){
                        if(err){
                            View.displayError(err) 
                        }else{
                            View.displaySuccess("group updated")
                        }
                    })
                }else{
                    View.displayError({ err : "Data not found" }) 
                }
            }
        })

    }
    static deleteGroup(params){
        let findId = {field: "name", 
                    value: params[0]
                    }
        Group.findOne(findId, function(err, data){
            if(err){
                View.displayError(err)
            }else{
                if(data){
                    let input = {id: data.id}
                    Group.deleteGroup(input, function(err){
                        if(err){
                            View.displayError(err) 
                        }else{
                            View.displaySuccess("group deleted.")
                            Groupcontacts.execute(`DELETE FROM Groupcontacts WHERE Groupcontacts.id_group =  ${data.id};`, function(err){
                                if(err){
                                    View.displayError(err)
                                }else{
                                    View.displaySuccess("group in  Groupcontactdeleted ")
                                }
                            })
                        }
                    })
                }else{
                    View.displayError({ err : "Data not found" }) 
                }
            }
        })

    }
    static showGroup(){
        Group.showGroup(function(err, data){
            if(err){
                View.displayError(err)
            }else{
                View.displaySuccess(data)
            }
        })
    }

    static help(){
        View.help()
    }
}
module.exports = Controller