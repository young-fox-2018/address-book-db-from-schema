const Model = require('../models/Model')
const ContactGroup = require('../models/ContactGroup')
const db = require('../db')

class Group extends Model {
    constructor(){
        super()
    }

    static create(name, cb){
        let query = `INSERT INTO groups
            (name) 
            VALUES ("${name}")
        `
        db.run(query, function(err) {
            if(err) cb(err)
            else cb(null)
        })
    }

    static deleteGroup(whereField, whereValue, cb) {
        Group.findOne("groups", whereField, whereValue, function (err, data) {
            if(err) cb(err)
            else if(data == undefined) cb("data not found")
            else {
                Group.delete("groups", whereField, whereValue, (err) => {
                    if(err) cb(err)
                    else{
                        ContactGroup.findOne("contactGroups", "groupId", data.id, function(err, row) {
                            if(err) cb(err)
                            else if(row !== undefined) {
                                ContactGroup.delete("contactGroups", "groupId", row.groupId, function(err) {
                                    if(err) cb(err)
                                    cb(null)
                                })
                            }
                        })
                    }
                })        
            }
        })
    }

    static showGroup(cb){
        let query = `SELECT * 
        FROM groups`

        db.all(query, function(err, rows){
            if(err) cb(err)
            else cb(null, rows)
        })
    }
}

module.exports = Group