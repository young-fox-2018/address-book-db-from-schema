const {db} = require('./setup')
const Model = require('../models/model')

class Contact extends Model {
    static create(name, phone, email, company, callback) {
        // console.log('masuk')
        let query = `INSERT INTO contacts (name, phone, email, company)
                    VALUES ("${name}", "${phone}", "${email}", "${company}")`
        db.run(query, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }

    static findAll(callback) {
        Model.findAll("contacts", function(err, data) {
            if (err) callback(err, null)
            else callback(null, data)
        })
    }
    
    static findOne(obj, callback) {
        Model.findOne("contacts", obj, function(err, row) {
            if (err) callback(err, null)
            else callback(null, row)
        })
    }

    static showContacts(callback) {
        Model.findAll("contacts", function(err, data) {
            if (err) callback(err,null)
            else {
                let contactData = data
                Model.findAll("groups", function(err, data) {
                    if (err) callback(err, null)
                    else {
                        let groupData = data
                        Model.findAll("contactGroups", function(err, data) {
                            if (err) callback(err, null)
                            else {
                                let cgData = data
                                for (let i = 0; i < contactData.length; i++) {
                                    contactData[i].group = []
                                    for (let j = 0; j < groupData.length; j++) {
                                        for (let k = 0; k < cgData.length; k++) {
                                            if (contactData[i].id == cgData[k].contactId) {
                                                if (cgData[k].groupId == groupData[j].id) {
                                                    contactData[i].group.push(groupData[j].name)
                                                }
                                            }                   
                                        }                                        
                                    }                    
                                }
                                callback(null, contactData)
                            }
                        })
                    }
                    
                })
            }
        })
    }

    static update(obj, callback) {
        Model.update("contacts", obj, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }

    static delete(obj, callback) {
        Model.delete("contacts", obj, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }
}

module.exports = Contact