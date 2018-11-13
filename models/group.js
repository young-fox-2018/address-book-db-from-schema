const Model = require('./model')
const fs = require('fs')
const dataGroups = JSON.parse(fs.readFileSync('./database/Group.json'))

class Group {
    static createTable(cb) {
        let fields = `id INTEGER PRIMARY KEY AUTOINCREMENT,
                      name TEXT NOT NULL`
        Model.createTable('Groups', fields, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
    static readDummyData(cb) {
        for (let i = 0; i < dataGroups.length; i++) {
            let dummyGroups = `(null, "${dataGroups[i].name}")`
            Model.create('Groups', dummyGroups, function (err) {
                if (err) {
                    cb(err)
                }
            })
        }
        cb(null)
    }
    static add(name, cb) {
        let data = `(null, "${name}")`
        Model.create('Groups', data, function (err) {
            if (err) {
                cb(err)
            } else {
                Model.findAll('Groups', function (err, array) {
                    if (err) {
                        cb(err, null)
                    } else {
                        cb(null, array)
                    }
                })
            }
        })
    }
    static findOne(field, value, cb) {
        Model.findOne('Groups', field, value, function (err, data) {
            if (err) {
                cb(err)
            } else {
                cb(data)
            }
        })
    }
    static update(field, newValue, fieldCondition, condition, cb) {
        Model.update('Groups', field, newValue, fieldCondition, condition, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
    static delete(fieldId, id, cb) {
        Model.delete('Groups', fieldId, id, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}




module.exports = Group