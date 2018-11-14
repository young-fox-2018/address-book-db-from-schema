const Model = require('../Models/model')
const Contact = require('../Models/contact')
const Group = require('../Models/group')
const Contactgroup = require('../Models/contact-group')
const View = require('../Views/View')

class Controller {

    static create(options){
        if(options[0].toLowerCase() === "contacts"){
            if(options.length !== 5){
                View.displayErr(`silahkan lengkapi data : name , company , phone , email`)
            }else{
                Contact.create(options,function(err){
                    if(err){
                        
                        View.displayErr(err)
                    }else{
                        View.displaysuccess('1 row is created at table contacts')
                    }
                })
            }
        }else if(options[0].toLowerCase() === "groups"){
            if(options.length !== 2){
                View.displayErr(`silahkan lengkapi data: name`)
            }else{
                Group.create(options,function(err){
                    if(err){
                        View.displayErr(err)
                    }else{
                        View.displaysuccess(`1 row is created at table groups`)
                    }
                })
            }
        }else if(options[0].toLowerCase() === "contactgroup"){
            if(options.length !== 3){
                View.displayErr(`silahkan lengkapi data: contactId, groupId`)
            }else{
                Contactgroup.create(options,function(err){
                    if(err){
                        View.displayErr(err)
                    }else{
                        View.displaysuccess(`1 row is created at contactgroup`)
                    }
                })
            }
        }
    }
    static show(options){
        if(options[0] === "groups" || options[0] === "contactgroups"){
            Model.findall(options[0],function(err,rows){
                if(err){
                    View.displayErr(err)
                }else{
                    View.displaysuccess(rows)
                }
            })
        }else if(options[0] === "contacts"){
            Model.findall(`(SELECT table1.name,company,phone,email,group_concat(groups.name) AS group_name
            FROM(SELECT * FROM contacts LEFT JOIN contactgroup ON contacts.id = contactgroup.contact_id)AS table1 
            LEFT JOIN  groups ON table1.group_id = groups.id 
            GROUP BY table1.name)`,function(err,rows){
                if(err){
                    View.displayErr(err)
                }else{
                    View.displaysuccess(rows)
                }
            })   
        }
    }
    static find(options){
        let param = {
            field:options[1],
            value:options[2]
        }
        if(options[0] !== "contacts"){
            Model.findone(options[0],param,function(err,row){
                if(err){
                    View.displayErr(err)
                }else if(row === undefined){
                    View.displayErr(`data not found`)
                }else{
                    View.displaysuccess(row)
                }
            })
        }else if(options[0] === "contacts" ){
            Model.findone(`(SELECT table1.name,company,phone,email,group_concat(groups.name) AS group_name
            FROM(SELECT * FROM contacts LEFT JOIN contactgroup ON contacts.id = contactgroup.contact_id)AS table1 
            LEFT JOIN  groups ON table1.group_id = groups.id 
            GROUP BY table1.name)`,param,function(err,row){
                if(err){
                    View.displayErr(err)
                }else if(row === undefined){
                    View.displayErr(`data not found`)
                }else{
                    View.displaysuccess(row)
                }

            })
        }
    }
    static help(){
        let data = `
        ====== ALL COMMAND ======
        create  <tablename> <value>..
        show    <tabename>
        update  <tablename> <field> <value>
        delete  <tablename> <field> <value>
        find    <tablename> <field> <value>`
        View.displaysuccess(data)
    }
    static delete(options){
        let param = {
            field:options[1],
            value:options[2]
        }
        Model.delete(options[0],param,function(err){
            if(err){
                View.displayErr(err)
            }else{
                View.displaysuccess(`success delete `)
            }
        })

        

    }
    static ShowAllContact(options){
        Contact.showAll
    }
}
module.exports = Controller