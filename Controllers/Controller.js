const View = require("../Views/View.js")
const Group = require("../Models/Group.js")
const Contact = require("../Models/Contact.js")
const ContactGroup = require("../Models/ContactGroup.js")

class Controller{

    static create(options){
        if(options[0] == 'Contact'){
            Contact.create(options[1],options[2],options[3],options[4],function(err){ 
                if(err){
                    View.displayError(err)
                } else {
                    View.displayData(`Berhasil membuat contact`)
                }
            })
        } else if (options[0] == "Group"){
            Group.create(options[1],function(err){ 
                if(err){
                    View.displayError(err)
                } else {
                    View.displayData(`Berhasil membuat group ${options[1]}`)
                }
            })
        } 
    }

    static invite(options){
        let nameContact = options[0]
        let nameGroup = options[1]

        let option1 = {
            name: nameContact
        }

        let option2 = {
            group_name: nameGroup
        }
        Contact.findOne('Contacts',option1,function(err,data){
            if(err){
                View.displayError(err)
            } else {
                if(data){
                    Group.findOne('Groups',option2,function(err,data2){
                        if(err){
                            View.displayError(err)
                        } else {
                            if(data2){
                                let option3 = {
                                    contactId : data.id,
                                    groupId : data2.id
                                }
                                ContactGroup.findOne('ContactsGroups',option3,function(err,data3){
                                    if(err){
                                        View.displayError(err)
                                    } else {
                                        if(data3){
                                            View.displayError("Data contact sudah ada di group")
                                        } else {
                                            ContactGroup.create(data.id,data2.id,function(err){
                                                if(err){
                                                    View.displayError(err)
                                                } else {
                                                    View.displayData(`berhasil memasukkan ${nameContact} ke group ${nameGroup}`)
                                                }
                                            })
                                        }
                                    }
                                })
                                
                            } else {
                                View.displayError("contact/group tidak ada")
                            }
                        }
                    })
                } else {
                    View.displayError("contact tidak ada")
                }
            }
        })
    }

    // static findOne(){
    // }

    // static findAll(){

    // }

    static update(){

    }

    static delete(){

    }

    static showContact(){

    }
}

module.exports = Controller