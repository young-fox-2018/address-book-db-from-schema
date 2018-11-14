const Model = require('./Model')
const db = require('../setupDb')


class Contact extends Model{

    static create(input, cb){
        let objInput = 
        {
            name: input[0],
            company: input[1],
            phoneNo: input[2],
            email: input[3]
        }

        if(!input[0] || !input[1] || !input[2] || !input[3]){
            cb("Please provide proper input as follows: <name> <company> <phoneNo> <email>")
        }
        else{
            super.create('Contacts', objInput, function(err){
                if(err){
                    let objErr = 
                    {
                        Message: "Errornya di Contact Create",
                        Details: err
                    }
                    cb(objErr)
                }
                else{
                    cb(null, objInput.name)
                }
            })
        }
    }

    static findAll(field,cb){
        let queryFindContacts = 
        `
        SELECT Contacts.name,
        Contacts.company,
        Contacts.phoneNo,
        Contacts.email,
        group_concat(Groups.name) AS "Group Name"
        FROM ${field}
        INNER JOIN contactGroups ON contactGroups.contactId = Contacts.id
        INNER JOIN Groups ON Groups.id = contactGroups.groupId
        GROUP BY Contacts.name
        `
        db.all(queryFindContacts,function(err,rows){
            if(err){
                let objErr = {
                    Message: "Errornya di db.all findAll Contacts",
                    Details: err
                }
                cb(objErr)
            }
            else{
                cb(null, rows)
            }
        })
    }
}

module.exports = Contact