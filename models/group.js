const {db} = require('./setup')
const Model = require('../models/model')

class Group extends Model {
    static create(name, callback) {
        let query = `INSERT INTO groups (name) VALUES ("${name}")`
        db.run(query, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }

    static findAll(callback) {
        Model.findAll("groups", function(err, data) {
            if (err) callback(err, null)
            else callback(null, data)
        })
    }

    static findOne(obj, callback) {
        Model.findOne("groups", obj, function(err, row) {
            if (err) callback(err, null)
            else callback(null, row)
        })
    }

    static showGroups(callback) {
        Model.findAll("groups", function(err, data) {
            if (err) callback(err, null)
            else {
                let groupData = data
                Model.findAll("contacts", function(err, data) {
                    if (err) callback(err, null)
                    else {
                        let contactData = data
                        Model.findAll("contactGroups", function(err, data) {
                            if (err) callback(err, null)
                            else {
                                let cgData = data
                                for (let i = 0; i < groupData.length; i++) {
                                    groupData[i].member = []
                                    for (let j = 0; j < contactData.length; j++) {
                                        for (let k = 0; k < cgData.length; k++) {
                                            if (groupData[i].id == cgData[k].groupId) {
                                                if (cgData[k].contactId == contactData[j].id) {
                                                    groupData[i].member.push(contactData[j].name)
                                                }
                                            }   
                                        }   
                                    }
                                }
                                callback(null, groupData)
                            }
                        })
                    }
                })
            }
        })
    }

    static update(obj, callback) {
        Model.update("groups", obj, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }

    static delete(obj, callback) {
        Model.delete("groups", obj, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }
}

module.exports = Group