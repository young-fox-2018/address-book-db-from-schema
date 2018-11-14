const Model = require("./model");
const db = require("../Database/database")

class ContactsGroups extends Model{

    static create(input, cb){
        super.create("contactsGroups", input, cb);
    }

    static readOne(input, cb){
        let sql = `SELECT ContactsGroups.id, Contacts.name AS contact_name, Groups.name AS group_name FROM contactsgroups
        JOIN Contacts ON Contacts.id = ContactsGroups.contactId
        JOIN Groups ON Groups.id = ContactsGroups.groupId
        WHERE ${input.field} = "${input.value}";`

        db.get(sql, function(err, data){
            if(err){
                cb(err)
            }
            else{
                if(data === undefined){
                    cb("The data you are looking for is not available")
                }
                else{
                    cb(null, data)
                }
            }
        })
    }

    static readAll(input, cb){
        let sql = `SELECT ContactsGroups.id, Contacts.name AS contact_name, Groups.name AS group_name FROM contactsgroups
        JOIN Contacts ON Contacts.id = ContactsGroups.contactId
        JOIN Groups ON Groups.id = ContactsGroups.groupId
        WHERE ${input.field} = "${input.value}";`

        db.all(sql, function(err, data){
            if(err){
                cb(err)
            }
            else{
                if(data === undefined){
                    cb("The data you are looking for is not available")
                }
                else{
                    cb(null, data)
                }
            }
        })
    }

    static delete(input, cb){
        super.delete("contactsGroups", input, cb)
    }
}

module.exports = ContactsGroups