const db = require('../db')
const Model = require("./Model")

class Group extends Model{
    static create(input, cb) {
        Group.findOne('groups', input.name, function(err, data) {
            if (err) {
                cb(err)
            } else {
                if (!data) {
                    let queries =`
                    INSERT INTO groups (name)
                    VALUES ("${input.name}")`
                    db.run(queries, function(err) {
                        if (err) {
                            cb({message: "err create group"})
                        } else [
                            cb(null)
                        ]
                    })
                } else {
                    cb('group sudah terdaftar')
                }
            }
        })
    }
}

module.exports = Group